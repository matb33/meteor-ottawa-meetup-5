Package.describe({
  summary: 'App clients section',
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.use([
    'templating',
    'template-regions',
    'nav-manager',
    'reactive-var',
    'subscription-loader',
    'meteorhacks:flow-router',
    'app-model-clients'
  ]);

  api.addFiles([
    'clients.html',
    'clients.js',
    'clientsList.html',
    'clientsList.js',
    'editClient.html',
    'editClient.js'
  ], 'client');

  api.addFiles([
    'navigation.js'
  ], ['client', 'server']);
});