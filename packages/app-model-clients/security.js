Clients.allow({
	insert: function (userId, doc) {
		return true;
	},
	update: function (userId, doc, fieldNames, modifier) {
		return true;
	},
	remove: function (userId, doc) {
		return true;
	}
});