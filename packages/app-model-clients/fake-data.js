Meteor.startup(function () {
	Clients.remove({});

	if (Clients.find().count() !== 0) return;

	Clients.insert({ company: 'Acme Corp.', contact: 'Wile E.', phone: '555-1234', email: 'wile.e@acmecorp.com' });
	Clients.insert({ company: 'MomCorp', contact: 'Bender', phone: '555-1235', email: 'bender@momcorp.com' });
	Clients.insert({ company: 'Rich Industries', contact: 'Richie Rich', phone: '555-1236', email: 'richie@richindustries.com' });
	Clients.insert({ company: 'Very Big Corp. of America', contact: 'Monty Python', phone: '555-1237', email: 'its@verybigcorpofamerica.com' });
	Clients.insert({ company: 'Warbucks Industries', contact: 'Lil’ Orphan Annie', phone: '555-1238', email: 'annie@warbucksindustries.com' });
	Clients.insert({ company: 'Tyrell Corp.', contact: 'Bladerunner', phone: '555-1239', email: 'hford@tyrellcorp.com' });
	Clients.insert({ company: 'Wayne Enterprises', contact: 'Batman', phone: '555-1240', email: 'bruce@wayneenterprises.com' });
	Clients.insert({ company: 'Virtucon', contact: 'Austin Powers', phone: '555-1241', email: 'apowers@virtucon.com' });
	Clients.insert({ company: 'Globex', contact: 'The Simpsons', phone: '555-1242', email: 'hsimpson@globex.com' });
	Clients.insert({ company: 'Wonka Industries', contact: 'Charlie', phone: '555-1243', email: 'charlie@wonkaindustries.com' });
	Clients.insert({ company: 'Stark Industries', contact: 'Iron Man', phone: '555-1244', email: 'tony@starkindustries.com' });
	Clients.insert({ company: 'Oceanic Airlines', contact: 'John Locke', phone: '555-1245', email: 'jlocke@oceanicairlines.com' });
	Clients.insert({ company: 'Cyberdyne Systems Corp.', contact: 'The Terminator', phone: '555-1246', email: 'arnold@cyberdynesystemscorp.com' });
	Clients.insert({ company: 'Gringotts', contact: 'Harry Potter', phone: '555-1247', email: 'harry.potter@gringotts.com' });
	Clients.insert({ company: 'Oscorp', contact: 'Harry Osborn', phone: '555-1248', email: 'harry@oscorp.com' });
	Clients.insert({ company: 'Spacely Space Sprockets', contact: 'The Jetsons', phone: '555-1249', email: 'george@spacelyspacesprockets.com' });
});