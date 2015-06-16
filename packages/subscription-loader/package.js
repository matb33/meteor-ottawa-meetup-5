Package.describe({
  summary: 'Subscription loader',
  version: '1.0.0'
});

Package.onUse(function (api) {
  api.use([
    'reactive-var',
    'underscore',
    'meteorhacks:flow-router'
  ]);

  api.addFiles([
    'SubscriptionLoader.js'
  ], 'client');

  api.export('SubscriptionLoader');
});