Meteor.startup(function () {
	Documents.remove({});

	if (Documents.find().count() !== 0) return;

	Clients.find().forEach(function (client) {
		Documents.insert({ clientId: client._id, title: "Doc 1", body: "This is document #1. It was generated for client " + client.company });
		Documents.insert({ clientId: client._id, title: "Doc 2", body: "This is document #2. It was generated for client " + client.company });
		Documents.insert({ clientId: client._id, title: "Doc 3", body: "This is document #3. It was generated for client " + client.company });
		Documents.insert({ clientId: client._id, title: "Doc 4", body: "This is document #4. It was generated for client " + client.company });
		Documents.insert({ clientId: client._id, title: "Doc 5", body: "This is document #5. It was generated for client " + client.company });
		Documents.insert({ clientId: client._id, title: "Doc 6", body: "This is document #6. It was generated for client " + client.company });
		Documents.insert({ clientId: client._id, title: "Doc 7", body: "This is document #7. It was generated for client " + client.company });
	});
});