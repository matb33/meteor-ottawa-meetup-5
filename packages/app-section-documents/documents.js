Template.documents.helpers({
  loaded: function () {
    return Template.instance().loader.isReady();
  },
  client: function () {
    return Template.instance().client.get();
  }
});

Template.documents.onCreated(function () {
  var self = this;

  self.client = new ReactiveVar(null);

  self.loader = new SubscriptionLoader(self, {
    routes: {
      'documents': function (params) {
        this.subscribe('all-documents');
      },
      'documents-by-client': function (params) {
        this.subscribe('specific-client', params.clientId);
        this.subscribe('documents-belonging-to-client', params.clientId);
      }
    },
    ready: function (params) {
      self.client.set(Clients.findOne(params.clientId));
    }
  });
});