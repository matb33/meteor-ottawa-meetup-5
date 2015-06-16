Template.clientsList.helpers({
  clients: function () {
    return Clients.find();
  }
});

Template.clientsList.onRendered(function () {
  var self = this;
  Meteor.setTimeout(function () {
    self.$('.fade').addClass('in');
  }, 50);
});