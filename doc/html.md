[HTML5 Ad Boilerplate homepage](http://html5adboilerplate.com) | [Documentation
table of contents](TOC.md)

# The HTML

## The adsize meta tag.
<meta name='adsize' content='width:300,height:250'>
This ad specific meta tag describes the width and height of the ad to the
ad server. Be sure to keep this in the <head> of the main document and if it's
a responsive ad tag, just include the default width value.


## X-UA-Compatible

This makes sure the latest version of IE is used in versions of IE that contain
multiple rendering engines. Even if a site visitor is using IE8 or IE9, it's
possible that they're not using the latest rendering engine their browser
contains. To fix this, use:

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

The `meta` tag tells the IE rendering engine two things:

1. It should use the latest, or edge, version of the IE rendering environment
2. If already installed, it should use the Google Chrome Frame rendering
   engine.

This `meta` tag ensures that anyone browsing your site in IE is treated to the
best possible user experience that their browser can offer.

This line breaks validation, and the Google Chrome Frame part won't work inside
a conditional comment. To avoid these edge case issues it is recommended that
you **remove this line and use the `.htaccess`** (or other server config)
to send these headers instead. You also might want to read [Validating:
X-UA-Compatible](http://groups.google.com/group/html5boilerplate/browse_thread/thread/6d1b6b152aca8ed2).

If you are serving your site on a non-standard port, you will need to set this
header on the server-side. This is because the IE preference option 'Display
intranet sites in Compatibility View' is checked by default.


## Mobile viewport

There are a few different options that you can use with the [`viewport` meta
tag](https://docs.google.com/present/view?id=dkx3qtm_22dxsrgcf4 "Viewport and
Media Queries - The Complete Idiot's Guide"). You can find out more in [the
Apple developer docs](http://j.mp/mobileviewport). HTML5 Ad Boilerplate comes with
a simple setup that strikes a good balance for general use cases.

```html
<meta name="viewport" content="width=device-width">
```

## The content area

The central part of the boilerplate template is pretty much empty. This is
intentional, in order to make the boilerplate suitable for ad development.

### Google Analytics Tracking Code

Finally, an optimized version of the latest Google Analytics tracking code is
included. Google recommends that this script be placed at the top of the page.
Factors to consider: if you place this script at the top of the page, you’ll be
able to count users who don’t fully load the page, and you’ll incur the max
number of simultaneous connections of the browser.

Further information:

* [Optimizing the asynchronous Google Analytics
  snippet](http://mathiasbynens.be/notes/async-analytics-snippet).
* [Tracking Site Activity - Google
  Analytics](http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html).
