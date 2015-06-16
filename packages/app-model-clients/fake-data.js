Meteor.startup(function () {
	Clients.remove({});

	if (Clients.find().count() !== 0) return;

	Clients.insert({ company: 'ACME', contact: 'Joe Binne', phone: '555-1234', email: 'joe@acme.com' });
	Clients.insert({ company: 'ACME-TWO', contact: 'Joe-Two Binne', phone: '555-1235', email: 'joe2@acme2.com' });
});