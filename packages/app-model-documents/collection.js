Documents = new Mongo.Collection('documents');

Documents.before.insert(function (nil, doc) {
  doc.createdAt = doc.createdAt || Date.now();
  doc.modifiedAt = doc.modifiedAt || Date.now();
});

Documents.before.update(function (nil, doc, fieldNames, modifier) {
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
});