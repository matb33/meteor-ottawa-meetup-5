Template.documentsList.helpers({
  documents: function () {
    return Documents.find();
  }
});

Template.documentsList.onRendered(function () {
  var self = this;
  Meteor.setTimeout(function () {
    self.$('.fade').addClass('in');
  }, 50);
});