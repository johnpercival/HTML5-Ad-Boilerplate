/*
 * HTML5 Ad Object
 */

function HTML5Ad () {};

var proto = {

    version: '1.0',
    author: 'John Percival',
    adVar1: 'foo',
    adVar2: 'bar',
    adWidth: '',
    adHeight: '',
    online: navigator.onLine,
    DNT: navigator.doNotTrack,
    acceptsCookies: navigator.cookieEnabled,
    isMobile: navigator.userAgent.toLowerCase().indexOf('mobile'),
    isAndroid: navigator.userAgent.toLowerCase().indexOf('android') > -1,
    publisher: window.location.hostname,
    mraid: false,
    safeFrame: false,
    hidden: '',

    // The init function that will get called to kick things off - NOTE: Try to keep the initial load around 75-100k

    init: function(params) {
      var mainScope = this;//get reference to AD object
      var container = params.adContainer,
          ad = document.querySelector(container),
          adReady = new CustomEvent('adReady');

      //create ad border
      if (params.createAdBorder) {
        var adW = window.getComputedStyle(ad,null).getPropertyValue('width');
        var adH = window.getComputedStyle(ad,null).getPropertyValue('height');
        ad.style.border = '1px solid #000';
        ad.style.width = adW;
        ad.style.height = adH;
      }

      //IAB's Rich Media API's (MRAID & SAFEFRAMES)
      if (params.mraid) {
        mainScope.mraid = params.mraid;
        var mScript = document.createElement('script');
        mScript.type = 'text/javascript';
        mScript.src = 'js/mraidClient.js';
        document.getElementsByTagName('head')[0].appendChild(mScript);
        window.addEventListener('doneLoading', console.log('MRAID API Installed'), false);
      } else if(params.safeFrame) {
        //IAB safe frame support coming soon using post message to communicate to the pub page iFrame
        console.log('SafeFrames API installed');
      }

      if (params.adType === 'static') {
        console.log('Ad is an static');
      } else if (params.adType === 'expandable') {
        console.log('Ad is an expandable');
      } else {
        console.log('Ad is an interstital');
      }

      //pixel density check
      console.log('Device Pixel Density: ' + mainScope.getDevicePixelRatio());

      //get device orientation
      window.onorientationchange = mainScope.setOrientation;

      //detect page visibility
      var visibilityChange;
      if (typeof document.hidden !== 'undefined') {
        mainScope.hidden = 'hidden';
        visibilityChange = 'visibilitychange';
      } else if (typeof document.mozHidden !== 'undefined') {
        mainScope.hidden = 'mozHidden';
        visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.msHidden !== 'undefined') {
        mainScope.hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        mainScope.hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
      }
      if (typeof document.addEventListener === 'undefined' || typeof mainScope.hidden === 'undefined') {
        console.warn('This demo requires a browser such as Google Chrome that supports the Page Visibility API.');
      } else {
         document.addEventListener(visibilityChange, mainScope.handleVisibilityChange, false);
      }

      console.log(adW + ' ' +  adH + ' ad on ' + mainScope.publisher + ' with DNT set to ' + mainScope.DNT);

      window.dispatchEvent(adReady);
    },


    //Layout
    //-------------------------------
    setOrientation: function(o) {
      var orientation = window.orientation;
      if (orientation != orientation1) {
          switch (orientation) {
            case 0:
                console.log('makePortrait');
                break;
            case 90:
                console.log('makeLandscape');
                break;
            case -90:
                console.log('makeLandscape');
                break;
            case 180:
                console.log('makePortrait');
                break;
          }
      }
      orientation1 = orientation;
      console.log('o' + orientation)
    },

    //Utils
    //-------------------------------

    // Query the device pixel ratio.
    getDevicePixelRatio: function () {
      if(window.devicePixelRatio === undefined) {
        return 1; // No pixel ratio available. Assume 1:1.
      } else {
        return window.devicePixelRatio;
      }
    },

    handleVisibilityChange: function (event) {
      var adVisible = new CustomEvent('adVisible'),
          adHidden = new CustomEvent('adHidden');

      var state = event.target.visibilityState ||
                  event.target.webkitVisibilityState ||
                  event.target.mozkitVisibilityState ||
                  event.target.mskitVisibilityState ||
                  event.target.oVisibilityState;

      if (state === 'hidden') {
          console.warn('Pause Ad Rendering');
          window.dispatchEvent(adHidden);
      } else {
          console.warn('Resume Ad Rendering');
          window.dispatchEvent(adVisible);
      }
    },

    //Rich Media Ad Handlers
    //-------------------------------

    /*
    *Method for the ads click through destination
    */
    openURL: function (url) {
      if(this.mraid) {
        mraid.launchURL(url);
      } else {
        window.open(url);
      }
    },

    expandAd: function() {
      if(this.mraid) {
        mraid.expandAd(this.adWidth, this.adHeight);
      }

      console.log('Ad Expand');
      toggleLayer('bannerDiv', 'panelDiv');

      var adExpand = new CustomEvent('adExpand');
      window.dispatchEvent(adExpand);
    },

    closeAd: function() {
      if(this.mraid) {
        mraid.closeAd();
      }

      console.log('Ad Closed');
      toggleLayer('panelDiv', 'bannerDiv');

      var adClosed = new CustomEvent('adClosed');
      window.dispatchEvent(adClosed);
    },

    toggleLayer: function(fromLayer, toLayer) {
      var fromElem, toElem, fromElemStyle, toElemStyle;

      fromElem = document.querySelector(fromLayer);
      fromElem.style.visibility = 'hidden';

      toElem = document.querySelector(toLayer);
      toElem.style.visibility = 'visible';
    }

};

HTML5Ad.prototype = proto;
