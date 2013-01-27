[HTML5 Ad Boilerplate homepage](http://html5adboilerplate.com) | [Documentation
table of contents](TOC.md)

# The JavaScript

Information about the default JavaScript included in the project.

## adMain.js

This file contains a global 'AD' object for accessing the properties and methods of
the ad. Things kick off in the main index.htmk with 'Ad.init(params);
some basic features in the JS file include:
	- DNT Information
	- Pixel Density Check
	- Orientation Check
	- Geolocation (if required)
	- Dynamic ad border (if required)
	- Page Visibility API
	- Accelerometer Check (if required)
	- IAB's MRAID support (if required)

Remember to remove features you do not need and minify, compress and serve off a CDN.

## mraidClient.js

This file is an adapter file for interfacing with the [IAB's MRAID API](http://www.iab.net/mraid).

From within the Ad.init, you can pass a value of mraid:true if your ad requires MRAID support.
NOTE: Be sure to uncomment the mraid.js script tag in the head of your index.html.

## safeFrameClient.js

Coming soon...
