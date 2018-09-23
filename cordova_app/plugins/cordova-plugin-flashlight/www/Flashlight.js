function Flashlight() {
  // track flashlight state
  this._isSwitchedOn = false;
}

Flashlight.prototype = {

  available: function (callback) {
    cordova.exec(function (avail) {
      callback(avail ? true : false);
    }, function() { callback(false); }, "Flashlight", "available", []);
  },

  switchOn: function (successCallback, errorCallback, options) {
    var opts = options || {};
    this._isSwitchedOn = true;
    cordova.exec(successCallback, errorCallback, "Flashlight", "switchOn", [opts]);
  },

  switchOff: function (successCallback, errorCallback) {
    this._isSwitchedOn = false;
    cordova.exec(successCallback, errorCallback, "Flashlight", "switchOff", []);
  },

  toggle: function (successCallback, errorCallback, options) {
    if (this._isSwitchedOn) {
      this.switchOff(successCallback, errorCallback);
    } else {
      this.switchOn(successCallback, errorCallback, options);
    }
  },

  isSwitchedOn: function () {
    return this._isSwitchedOn;
  }
};

Flashlight.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.flashlight = new Flashlight();
  return window.plugins.flashlight;
};

cordova.addConstructor(Flashlight.install);
