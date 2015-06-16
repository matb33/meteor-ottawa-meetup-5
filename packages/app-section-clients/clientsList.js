Template.clientsList.helpers({
  clients: function () {
    return Clients.find({}, { sort: { company: 1, createdAt: 1 }});
  }
});

Template.clientsList.onRendered(function () {
  var self = this;
  Meteor.setTimeout(function () {
    self.$('.fade').addClass('in');
  }, 50);
});