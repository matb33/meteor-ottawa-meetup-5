Package.describe({
  summary: 'App navigation',
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.use([
    'templating',
    'template-regions',
    'nav-manager'
  ]);

  api.addFiles([
    'navigation.html',
    'navigation.js'
  ], 'client');
});