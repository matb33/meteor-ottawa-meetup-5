Package.describe({
  summary: 'App instantiation of Bootstrap (custom vars etc)',
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.use(['less', 'local-bootstrap3']);

  api.addFiles('bootstrap.less', 'client');

  // The fact that referencing another package even works is surprising. This
  // approach only works because this package and the local-bootstrap3 package
  // are guaranteed to be in the same packages parent folder. This is a
  // temporary albeit very effective technique in using a fully customized
  // Bootstrap while Meteor works out how to do this properly with Atmosphere
  // packages. Ultimately, one should use something like
  // https://atmospherejs.com/matb33/bootstrap-full or one of its specific
  // related sub-packages once cross-package LESS imports are ironed out.
  api.addFiles([
    '../local-bootstrap3/js/alert.js',
    '../local-bootstrap3/js/tooltip.js',
    '../local-bootstrap3/js/dropdown.js'
  ], 'client');
});