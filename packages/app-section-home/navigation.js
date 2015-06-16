FlowRouter.route('/', {
  name: 'home',
  action: function (params) {
    Template.bind(Template.home, 'main');
  }
});