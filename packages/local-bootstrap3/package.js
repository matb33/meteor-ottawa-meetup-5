Package.describe({
  summary: 'Twitter Bootstrap 3.3.4 (must be configured by a sibling local package)',
  version: '3.3.4'
});

Package.onUse(function (api) {
  api.use(['jquery', 'less'], 'client');
  api.addFiles([
    'fonts/glyphicons-halflings-regular.eot',
    'fonts/glyphicons-halflings-regular.svg',
    'fonts/glyphicons-halflings-regular.ttf',
    'fonts/glyphicons-halflings-regular.woff',
    'fonts/glyphicons-halflings-regular.woff2'
  ], 'client', { isAsset: true });
});