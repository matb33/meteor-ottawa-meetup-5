Template.editClient.helpers({
  loaded: function () {
    return Template.instance().loader.isReady();
  },
  client: function () {
    return Template.instance().client.get();
  }
});

Template.editClient.onCreated(function () {
  var self = this;

  self.client = new ReactiveVar(null);

  self.loader = new SubscriptionLoader(self, {
    routes: {
      'edit-client': function (params) {
        this.subscribe('specific-client', params.clientId);
      }
    },
    ready: function (params) {
      self.client.set(Clients.findOne(params.clientId));
    }
  });
});