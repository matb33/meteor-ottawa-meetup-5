Package.describe({
  summary: 'Light-weight template region binding system',
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.use([
    'templating',
    'underscore',
    'reactive-var',
    'random'
  ]);

  api.addFiles([
    'bind.js',
    'template.html',
    'template.js'
  ], 'client');
});