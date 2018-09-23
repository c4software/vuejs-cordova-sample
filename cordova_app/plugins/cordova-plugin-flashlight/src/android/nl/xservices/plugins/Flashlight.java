package nl.xservices.plugins;

import android.Manifest;
import android.annotation.TargetApi;
import android.content.Context;
import android.content.pm.FeatureInfo;
import android.content.pm.PackageManager;
import android.graphics.SurfaceTexture;
import android.hardware.Camera;
import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CameraManager;
import android.os.Build;
import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PermissionHelper;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import java.io.IOException;
import java.lang.reflect.Method;

public class Flashlight extends CordovaPlugin {

  private static final String ACTION_AVAILABLE = "available";
  private static final String ACTION_SWITCH_ON = "switchOn";
  private static final String ACTION_SWITCH_OFF = "switchOff";

  private static Boolean capable;
  private boolean releasing;

  @SuppressWarnings("deprecation")
  private Camera mCamera;

  private static final int PERMISSION_CALLBACK_CAMERA = 33;
  private String[] permissions = {Manifest.permission.CAMERA};
  private CallbackContext callbackContext;

  @Override
  public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
    Log.d("Flashlight", "Plugin Called: " + action);
    this.callbackContext = callbackContext;

    try {
      if (action.equals(ACTION_SWITCH_ON)) {

        cordova.getThreadPool().execute(new Runnable() {
          public void run() {

            // When switching on immediately after checking for isAvailable,
            // the release method may still be running, so wait a bit.
            while (releasing) {
              try {
                Thread.sleep(10);
              } catch (InterruptedException ignore) {
              }
            }

            // android M permission
            if (!hasPermisssion()) {
              requestPermissions(PERMISSION_CALLBACK_CAMERA);
            } else {
              toggleTorch(true);
            }
          }
        });

        return true;
      } else if (action.equals(ACTION_SWITCH_OFF)) {
        cordova.getThreadPool().execute(new Runnable() {
          public void run() {
            toggleTorch(false);
            releaseCamera();
          }
        });
        return true;
      } else if (action.equals(ACTION_AVAILABLE)) {
        callbackContext.success(isCapable() ? 1 : 0);
        return true;
      } else {
        callbackContext.error("flashlight." + action + " is not a supported function.");
        return false;
      }
    } catch (Exception e) {
      callbackContext.error(e.getMessage());
      return false;
    }
  }

  private boolean isCapable() {
    if (capable == null) {
      capable = false;
      final PackageManager packageManager = this.cordova.getActivity().getPackageManager();
      for (final FeatureInfo feature : packageManager.getSystemAvailableFeatures()) {
        if (PackageManager.FEATURE_CAMERA_FLASH.equalsIgnoreCase(feature.name)) {
          capable = true;
          break;
        }
      }
    }
    return capable;
  }

  private void toggleTorch(boolean switchOn) {
    try {
      if (isCapable()) {
        doToggleTorch(switchOn);
      } else {
        callbackContext.error("Device is not capable of using the flashlight. Please test with flashlight.available()");
      }
    } catch (Exception e) {
      callbackContext.error(e.getMessage());
    }
  }
  @SuppressWarnings("deprecation")
  private void doToggleTorch(boolean switchOn) throws IOException, CameraAccessException {
    if (Build.VERSION.SDK_INT >= 23) { // Android M has such an easy API! <3
      doToggleTorchSdk23(switchOn);

    } else {
      if (mCamera == null) {
        mCamera = Camera.open();
        if (Build.VERSION.SDK_INT >= 11) { // honeycomb
          // required for (at least) the Nexus 5
          mCamera.setPreviewTexture(new SurfaceTexture(0));
        }
      }
      final Camera.Parameters mParameters = mCamera.getParameters();
      mParameters.setFlashMode(switchOn ? Camera.Parameters.FLASH_MODE_TORCH : Camera.Parameters.FLASH_MODE_OFF);
      mCamera.setParameters(mParameters);
      mCamera.startPreview();
      callbackContext.success();
    }
  }

  @TargetApi(21)
  private void doToggleTorchSdk23(boolean switchOn) throws IOException, CameraAccessException {
    final CameraManager cameraManager = (CameraManager) cordova.getActivity().getSystemService(Context.CAMERA_SERVICE);
    for (final String id : cameraManager.getCameraIdList()) {
      // Turn on the flash if the camera has one (usually the one at index 0 has one)
      final Boolean hasFlash = cameraManager.getCameraCharacteristics(id).get(CameraCharacteristics.FLASH_INFO_AVAILABLE);
      if (Boolean.TRUE.equals(hasFlash)) {
        setTorchMode(cameraManager, id, switchOn);
        break;
      }
    }
  }

  @TargetApi(23)
  private void setTorchMode(CameraManager cameraManager, String id, boolean switchOn) throws CameraAccessException {
    // since folks may not use SDK 23 to compile we'll use reflection as a temporary solution
    try {
      final Method setTorchMode = cameraManager.getClass().getMethod("setTorchMode", String.class, boolean.class);
      setTorchMode.invoke(cameraManager, id, switchOn);
      callbackContext.success();
    } catch (ReflectiveOperationException e) {
      callbackContext.error(e.getMessage());
    } catch (Throwable t) {
      callbackContext.error(t.getMessage());
    }
  }

  public boolean hasPermisssion() {
    for (final String p : permissions) {
      if (!PermissionHelper.hasPermission(this, p)) {
        return false;
      }
    }
    return true;
  }

  public void requestPermissions(int requestCode) {
    PermissionHelper.requestPermissions(this, requestCode, permissions);
  }

  public void onRequestPermissionResult(int requestCode, String[] permissions,
                                        int[] grantResults) throws JSONException {
    PluginResult result;
    for (int r : grantResults) {
      if (r == PackageManager.PERMISSION_DENIED) {
        result = new PluginResult(PluginResult.Status.ILLEGAL_ACCESS_EXCEPTION);
        this.callbackContext.sendPluginResult(result);
        return;
      }
    }

    switch (requestCode) {
      case PERMISSION_CALLBACK_CAMERA:
        toggleTorch(true);
        break;
    }
  }

  private void releaseCamera() {
    releasing = true;
    // we need to release the camera, so other apps can use it
    new Thread(new Runnable() {
      public void run() {
        if (mCamera != null) {
          mCamera.stopPreview();
          mCamera.setPreviewCallback(null);
          mCamera.unlock();
          mCamera.release();
          mCamera = null;
        }
        releasing = false;
      }
    }).start();
  }
}
