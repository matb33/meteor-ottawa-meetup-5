Meteor.startup(function () {
	Documents.remove({});

	if (Documents.find().count() !== 0) return;

	Clients.find().forEach(function (client) {
		for (var i = 1; i <= Math.ceil(Math.random() * 25); i++) {
			Documents.insert({ clientId: client._id, title: "Doc " + i, body: "This is document #" + i + ". It was generated for client " + client.company });
		}
	});
});