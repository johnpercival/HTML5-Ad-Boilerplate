[HTML5 Ad Boilerplate homepage](http://html5adboilerplate.com) | [Documentation
table of contents](TOC.md)

# The CSS

The HTML5 Ad Boilerplate starting CSS includes:

* Useful HTML5 Ad Boilerplate defaults.
* Common helpers.
* Placeholder media queries in responsive.css.

## HTML5 Ad Boilerplate defaults

This project includes a handful of base styles that include:

* Global ad reset on margin and padding.
* Basic ad container (.adContainer) class by default.
* Force GPU Hack on CSS using translateZ(0); on main ad class

You are free to modify or add to these base styles as your project requires.

## Media Queries (responsive.css)

The boilerplate makes it easy to get started with a "Mobile First" and
[Responsive Web
Design](http://www.alistapart.com/articles/responsive-web-design/) approach to
ad development. But it's worth remembering that there are [no silver
bullets](http://www.cloudfour.com/css-media-query-for-mobile-is-fools-gold/).

We include common placeholder Media Queries to build up your mobile styles for wider
viewports and high-resolution displays. It's recommended that you adapt these
Media Queries based on the content of your publisher rather than mirroring the fixed
dimensions of specific devices.

If you do not want to take a "Mobile First" approach, you can simply edit or
remove these placeholder Media Queries. One possibility would be to work from
wide viewports down and use `max-width` MQs instead, e.g., `@media only screen
and (max-width: 480px)`.

Take a look into the HTML5 Boilerplate [Mobile
Boilerplate](https://github.com/h5bp/mobile-boilerplate) for features that are
useful when developing mobile wep apps.
