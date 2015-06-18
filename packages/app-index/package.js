Package.describe({
  summary: 'App index',
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.use([
    'meteor-platform',
    'app-bootstrap',
    'app-navigation',
    'app-section-home',
    'app-section-documents',
    'app-section-clients'
  ]);

  // Expose these to the global namespace
  api.imply([
    'meteor-platform',
    'app-model-clients',
    'app-model-documents',
    'subscription-loader',
    'meteorhacks:flow-router'
  ]);

  api.use([
    'templating',
    'less',
    'template-regions'
  ]);

  api.addFiles([
    'index.html',
    'index.js',
    'index.less',
    'utilities.less'
  ], 'client');
});