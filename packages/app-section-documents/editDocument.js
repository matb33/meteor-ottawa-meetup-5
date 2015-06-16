Template.editDocument.helpers({
  loaded: function () {
    return Template.instance().loader.isReady();
  },
  document: function () {
    return Template.instance().document.get();
  }
});

Template.editDocument.onCreated(function () {
  var self = this;

  self.document = new ReactiveVar(null);

  self.loader = new SubscriptionLoader(self, {
    routes: {
      'edit-document': function (params) {
        this.subscribe('specific-document', params.documentId);
      }
    },
    ready: function (params) {
      self.document.set(Documents.findOne(params.documentId));
    }
  });
});