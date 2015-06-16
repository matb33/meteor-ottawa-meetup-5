# Bootstrap 3.3.4 using local-package technique (poor man's Meteor Bootstrap)

## Why?

This is probably the easiest and most flexible way of adding a fully
customizable Bootstrap to your Meteor app. Should the technique prove to be
limiting in some way I can't foresee, you always have the Bootstrap local files
nearby for you to hack on (as opposed to a read-only Atmosphere package).

## Why not?

It may or may not be fragile. The local package you need to create in order to
decide which parts of Bootstrap you want for your app relies on being able to
reference files directly from a sibling local package. This seems wrong in
principle, but it works. Taking advantage of this "feature" is what allows this
simple package technique to work.

Additionally, better options are coming once cross-package LESS imports are
officially supported by Meteor. One of these, the [Meteor Bootstrap
package-collection](https://github.com/matb33/meteor-bootstrap) by yours truly,
fully leverages the Meteor package dependency system to allow the developer to
load the bare minimum Bootstrap functionality that they require for their app.
Stay tuned for that one!

## Usage

1.  [Download this repo](https://github.com/matb33/meteor-local-bootstrap/archive/master.zip)
    and extract into your app's packages folder as `packages/local-bootstrap3/`
    (create the `packages/` folder if you don't already have one);

2.  Create a local package (eg. `app-bootstrap`, so: `packages/app-bootstrap/`).
    Create at least the 3 files found below. You can add other files later on,
    such as themes (see inline comments for examples);

3.  Add this package to your app (`meteor add app-bootstrap`). You don't need
    to explicitly add `local-bootstrap3` -- `app-bootstrap` will pull it in
    automatically.

## Files to create under `packages/app-bootstrap/`

--- package.js -----------------------------------------------------------------

```javascript
Package.describe({
  summary: 'Bootstrap 3.3.4 app-specific configuration package',
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.use(['less', 'local-bootstrap3']);

  api.addFiles('bootstrap.less', 'client');

  // Add only the .js files you need
  api.addFiles([
    '../local-bootstrap3/js/alert.js',
    '../local-bootstrap3/js/tooltip.js',
    '../local-bootstrap3/js/dropdown.js'
  ], 'client');
});
```

--- variables.less -------------------------------------------------------------

```less
// Customize Bootstrap variables here:
@icon-font-path: "/packages/local-bootstrap3/fonts/";
```

--- bootstrap.less -------------------------------------------------------------

```less
// COMMENT-OUT ANY BOOTSTRAP LESS FILES YOU DON'T NEED:

// Core variables and mixins
@import "../local-bootstrap3/less/variables.less";
@import "../local-bootstrap3/less/mixins.less";

// Reset and dependencies
@import "../local-bootstrap3/less/normalize.less";
@import "../local-bootstrap3/less/print.less";
@import "../local-bootstrap3/less/glyphicons.less";

// Core CSS
@import "../local-bootstrap3/less/scaffolding.less";
@import "../local-bootstrap3/less/type.less";
@import "../local-bootstrap3/less/code.less";
@import "../local-bootstrap3/less/grid.less";
@import "../local-bootstrap3/less/tables.less";
@import "../local-bootstrap3/less/forms.less";
@import "../local-bootstrap3/less/buttons.less";

// Components
@import "../local-bootstrap3/less/component-animations.less";
@import "../local-bootstrap3/less/dropdowns.less";
@import "../local-bootstrap3/less/button-groups.less";
@import "../local-bootstrap3/less/input-groups.less";
@import "../local-bootstrap3/less/navs.less";
@import "../local-bootstrap3/less/navbar.less";
@import "../local-bootstrap3/less/breadcrumbs.less";
@import "../local-bootstrap3/less/pagination.less";
@import "../local-bootstrap3/less/pager.less";
@import "../local-bootstrap3/less/labels.less";
@import "../local-bootstrap3/less/badges.less";
@import "../local-bootstrap3/less/jumbotron.less";
@import "../local-bootstrap3/less/thumbnails.less";
@import "../local-bootstrap3/less/alerts.less";
@import "../local-bootstrap3/less/progress-bars.less";
@import "../local-bootstrap3/less/media.less";
@import "../local-bootstrap3/less/list-group.less";
@import "../local-bootstrap3/less/panels.less";
@import "../local-bootstrap3/less/responsive-embed.less";
@import "../local-bootstrap3/less/wells.less";
@import "../local-bootstrap3/less/close.less";

// Components w/ JavaScript
@import "../local-bootstrap3/less/modals.less";
@import "../local-bootstrap3/less/tooltip.less";
@import "../local-bootstrap3/less/popovers.less";
@import "../local-bootstrap3/less/carousel.less";

// Utility classes
@import "../local-bootstrap3/less/utilities.less";
@import "../local-bootstrap3/less/responsive-utilities.less";

// OPTIONAL THEMES:

// "Amelia" theme by https://bootswatch.com/
// @import "amelia/variables.less";
// @import "amelia/bootswatch.less";

// "Cerulean" theme by https://bootswatch.com/
// @import "cerulean/variables.less";
// @import "cerulean/bootswatch.less";

// "Slate" theme by https://bootswatch.com/
// @import "slate/variables.less";
// @import "slate/bootswatch.less";

// "Superhero" theme by https://bootswatch.com/
// @import "superhero/variables.less";
// @import "superhero/bootswatch.less";

@import "variables.less";
```
