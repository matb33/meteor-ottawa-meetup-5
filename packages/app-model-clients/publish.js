Meteor.publish('all-clients', function () {
	return Clients.find();
});

Meteor.publish('specific-client', function (clientId) {
	return Clients.find(clientId);
});