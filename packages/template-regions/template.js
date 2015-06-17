Template.template.helpers({
  region: function () {
    Template._ensureRegionBindingReactive(this.region);
    return this.region;
  },
  names: function () {
    var data = Template.parentData(1);
    return Template._templateRegionBindings[data.region].get();
  },
  context: function () {
    return this.context || Template.parentData(1) || window || this;
  }
});