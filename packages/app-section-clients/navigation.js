var routeGroup = FlowRouter.group({
  prefix: '/clients'
});

routeGroup.route('/', {
  name: 'clients',
  action: function (params) {
    Template.bind(Template.clients, 'main');
  }
});

routeGroup.route('/edit/:clientId', {
  name: 'edit-client',
  action: function (params) {
    Template.bind(Template.editClient, 'main');
  }
});

//---

NavManager.register({
  name: 'clients',
  caption: 'Clients',
  href: '/clients',
  active: function () {
    FlowRouter.watchPathChange();
    var current = FlowRouter.current();
    return current && current.route && current.route.group === routeGroup;
  }
});