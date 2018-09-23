using Microsoft.Phone.Tasks;
using Microsoft.Phone.Shell;

using WPCordovaClassLib.Cordova;
using WPCordovaClassLib.Cordova.Commands;
using WPCordovaClassLib.Cordova.JSON;
using Windows.Phone.Media.Capture;

using System;

using Windows.Devices;
using Windows.Devices.Input;

using Microsoft.Devices;

namespace WPCordovaClassLib.Cordova.Commands
{
    public class Flashlight : BaseCommand
    {

        protected AudioVideoCaptureDevice Device { get; set; }

        public void available(string jsonArgs)
        {
            DispatchCommandResult(new PluginResult(PluginResult.Status.OK, hasFlashlight()));
        }

        public async void switchOn(string jsonArgs)
        {
            if (hasFlashlight()) {
                if (this.Device == null)
                {
                    this.Device = await AudioVideoCaptureDevice.OpenAsync(CameraSensorLocation.Back,
                        AudioVideoCaptureDevice.GetAvailableCaptureResolutions(CameraSensorLocation.Back)[0]);
                }
                bool disposed = false;
                try
                {
                    this.Device.SetProperty(KnownCameraAudioVideoProperties.VideoTorchMode, VideoTorchMode.On);
                }
                catch (ObjectDisposedException ignore)
                {
                    // may be thrown when the app is paused/resumed
                    disposed = true;
                }
                if (disposed)
                {
                    this.Device = await AudioVideoCaptureDevice.OpenAsync(CameraSensorLocation.Back,
                        AudioVideoCaptureDevice.GetAvailableCaptureResolutions(CameraSensorLocation.Back)[0]);
                    this.Device.SetProperty(KnownCameraAudioVideoProperties.VideoTorchMode, VideoTorchMode.On);
                }
                DispatchCommandResult(new PluginResult(PluginResult.Status.OK));
            } else {
                DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Device is not capable of using the flashlight. Please test with flashlight.available()"));
            }
        }

        public async void switchOff(string jsonArgs)
        {
            if (hasFlashlight()) {
                if (this.Device == null)
                {
                    this.Device = await AudioVideoCaptureDevice.OpenAsync(CameraSensorLocation.Back,
                        AudioVideoCaptureDevice.GetAvailableCaptureResolutions(CameraSensorLocation.Back)[0]);
                }
                bool disposed = false;
                try
                {
                    this.Device.SetProperty(KnownCameraAudioVideoProperties.VideoTorchMode, VideoTorchMode.Off);
                }
                catch (ObjectDisposedException ignore)
                {
                    // may be thrown when the app is paused/resumed
                    disposed = true;
                }
                if (disposed)
                {
                    this.Device = await AudioVideoCaptureDevice.OpenAsync(CameraSensorLocation.Back,
                        AudioVideoCaptureDevice.GetAvailableCaptureResolutions(CameraSensorLocation.Back)[0]);
                    this.Device.SetProperty(KnownCameraAudioVideoProperties.VideoTorchMode, VideoTorchMode.Off);
                }
                DispatchCommandResult(new PluginResult(PluginResult.Status.OK));
            } else {
                DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Device is not capable of using the flashlight. Please test with flashlight.available()"));
            }
        }

        private bool hasFlashlight()
        {
            var cam = new Microsoft.Devices.PhotoCamera(CameraType.Primary);
            return cam.IsFlashModeSupported(FlashMode.On);
        }


        public override void OnResume(object sender, ActivatedEventArgs e)
        {
            this.Device = null;
        }
    }
}
