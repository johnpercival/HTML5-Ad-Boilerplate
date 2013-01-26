//Need to add interstitial support

var MRAID = {

  version: '1.0',
  url: 'http://www.iab.net/mraid',

  ready: function() {
    var state = mraid.getState();
    if (state === 'loading') {
      console.log("MRAID Ad: adding event listener for " + state);
      mraid.addEventListener('ready', adInit);
    } else {
      console.log("MRAID Ad: is " + state + ", calling adInit");
      this.mraidInit();
    }

    this.dispatchEvent('doneLoading');
  },

  mraidInit: function () {
      mraid.addEventListener('error', this.handleErrorEvent);
      mraid.addEventListener('stateChange', this.handleStateChangeEvent);
  },

  expandAd: function(width, height) {
      mraid.setExpandProperties({
        width: width,
        height: height,
        useCustomClose: true
      });
      mraid.expand();
  },

  closeAd: function() {
      mraid.close();
  },

  launchURL: function(url) {
      mraid.open(url);
  },

  handleStateChangeEvent: function (state) {
      state = mraid.getState();
      switch (state) {
        case "default":
            //broadcast close to ad server platform
            break;
        case "expanded":
            //broadcast open to ad server platform
            break;
      }
      console.log("State - " + state + " at handleStateChangeEvent");
  },

   handleErrorEvent: function (message, action) {
      var msg = "MRAID ERROR ";
      if (action != null) {
          msg += "caused by action '" + action + "', ";
      }
      msg += "Message: " + message;
      console.error(msg);
  },

};

MRAID.ready();
