Template.documentsList.helpers({
  documents: function () {
    return Documents.find({}, { sort: { createdAt: 1, clientId: 1 } });
  }
});

Template.documentsList.onRendered(function () {
  var self = this;
  Meteor.setTimeout(function () {
    self.$('.fade').addClass('in');
  }, 50);
});