Template.clients.helpers({
  loaded: function () {
    return Template.instance().loader.isReady();
  }
});

Template.clients.onCreated(function () {
  var self = this;

  self.loader = new SubscriptionLoader(self, {
    routes: {
      'clients': function (params) {
        this.subscribe('all-clients');
      }
    }
  });
});