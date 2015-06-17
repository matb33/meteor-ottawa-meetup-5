Meteor.publish('all-documents', function () {
  return Documents.find();
});

Meteor.publish('documents-belonging-to-client', function (clientId) {
  return Documents.find({ clientId: clientId });
});

Meteor.publish('specific-document', function (documentId) {
  return Documents.find(documentId);
});