Package.describe({
  summary: 'Navigation manager',
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.use([
    'underscore',
    'reactive-var',
    'meteorhacks:flow-router'
  ]);

  api.addFiles([
    'NavManager.js'
  ], ['client', 'server']);

  api.export("NavManager");
});