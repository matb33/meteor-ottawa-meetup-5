Package.describe({
  summary: 'App index',
  version: '1.0.0'
});

Package.onUse(function (api) {
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