function updateCountOnClient(nil, doc) {
  var count = Documents.find({
  	clientId: doc.clientId
  }).count();

  Clients.update({
  	_id: doc.clientId
  }, {
  	$set: { _documentsCount: count }
  });
}

Documents.after.insert(updateCountOnClient);
Documents.after.remove(updateCountOnClient);

Clients.after.update(function (userId, doc, fieldNames, modifier, options) {
  Documents.update({
  	clientId: doc._id
  }, {
  	$set: { _client: doc }
  }, {
  	multi: true
  });
});

Clients.after.remove(function (nil, doc) {
  // We won't bother updating the client property on the related documents
  // because we end up deleting all these documents anyway
  Documents.remove({ clientId: doc._id });
});