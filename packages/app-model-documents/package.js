Package.describe({
  summary: 'App documents model',
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.use([
    'mongo',
    'tracker',
    'app-model-clients'
  ]);

  api.addFiles([
    'collection.js'
  ], ['client', 'server']);

  api.addFiles([
    'denorm.js',
    'fake-data.js',
    'security.js',
    'publish.js'
  ], 'server');

  api.export('Documents');
});