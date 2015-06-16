var routeGroup = FlowRouter.group({
  prefix: '/documents'
});

routeGroup.route('/', {
  name: 'documents',
  action: function (params) {
    Template.bind(Template.documents, 'main');
  }
});

routeGroup.route('/by-client/:clientId', {
  name: 'documents-by-client',
  action: function (params) {
    Template.bind(Template.documents, 'main');
  }
});

routeGroup.route('/edit/:documentId', {
  name: 'edit-document',
  action: function (params) {
    Template.bind(Template.editDocument, 'main');
  }
});

//---

NavManager.register({
  name: 'documents',
  caption: 'Docs',
  href: '/documents',
  active: function () {
    FlowRouter.watchPathChange();
    var current = FlowRouter.current();
    return current && current.route && current.route.group === routeGroup;
  }
});