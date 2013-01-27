[HTML5 Ad Boilerplate homepage](http://html5adboilerplate.com) | [Documentation
table of contents](TOC.md)

# Usage

Once you have cloned or downloaded HTML5 Ad Boilerplate, creating an ad usually involves the following:

1. Set up the basic structure of the ad.
2. Add some content, style, and functionality.
3. Run your site locally to see how it looks.
4. (Optionally run a build script to automate the optimization of your site -
   e.g. [GruntJS](http://gruntjs.com/).
5. Deploy your ad.


## Basic structure

A basic HTML5 Ad Boilerplate ad initially looks something like this:

```
.
├── css
│   ├── adMain.css
│   └── responsive.css
├── doc
├── img
`	├── singleDensity
		└── html5_logo_sm.png
│   └── doubleDensity
│   	└── html5_logo.png
├── js
│   ├── adMain.js
│   └── mraidClient.js
└── index.html
```

What follows is a general overview of each major part and how to use them.

### css

This directory should contain all your ad's CSS files. It includes some
initial CSS to help get you started from a solid foundation. [About the
CSS](css.md).

### doc

This directory contains all the HTML5 Ad Boilerplate documentation. You can use it
as the location and basis for your own project's documentation.

### js

This directory should contain all your ad's JS files. Lightweight Libraries, plugins,
and custom code can all be included here. It includes some initial JS to help
get you started. [About the JavaScript](js.md).

### index.html

This is the default HTML skeleton that should form the basis of all pages within
your ad. If you are using a server-side templating framework, then you will
need to integrate this starting HTML with your setup.

Make sure that you update the URLs for the referenced CSS and JavaScript if you
modify the directory structure at all.

If you are using Google Analytics or any other analytics service, make sure that you
edit the corresponding snippet at the bottom to include your analytics ID.
