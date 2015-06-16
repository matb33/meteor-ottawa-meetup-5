Package.describe({
  summary: 'App home section',
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.use([
    'templating',
    'template-regions',
    'nav-manager',
    'meteorhacks:flow-router'
  ]);

  api.addFiles([
    'home.html',
    'home.js'
  ], 'client');

  api.addFiles([
    'navigation.js'
  ], ['client', 'server']);
});