Package.describe({
  summary: 'App documents section',
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
    'sacha:spin',
    'app-model-documents',
    'app-model-clients'
  ]);

  api.addFiles([
    'documents.html',
    'documents.js',
    'documentsList.html',
    'documentsList.js',
    'editDocument.html',
    'editDocument.js'
  ], 'client');

  api.addFiles([
    'navigation.js'
  ], ['client', 'server']);
});