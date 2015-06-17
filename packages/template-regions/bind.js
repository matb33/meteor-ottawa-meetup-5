Template._templateRegionBindings = {};

Template._ensureRegionBindingReactive = function (region) {
  if (region && !Template._templateRegionBindings[region]) {
    Template._templateRegionBindings[region] = new ReactiveVar([]);
  }
}

Template.bind = function (tmpl, region, append) {
  var name = tmpl.viewName.substr(9); // chop-off "Template."

  Template._ensureRegionBindingReactive(region);

  var id = name + (append ? "_" + Random.id() : "");
  var obj = { _id: id, name: name };
  var bindings;

  if (append) {
    bindings = Template._templateRegionBindings[region].get();
    Template._templateRegionBindings[region].set(bindings.concat([obj]));
  } else {
    Template._templateRegionBindings[region].set([obj]);
  }
};