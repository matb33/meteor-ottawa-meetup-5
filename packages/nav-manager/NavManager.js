NavManager = (function () {
  var items = new ReactiveVar([]);

  function register(config) {
    var _items = items.get();
    var len = _items.push(config);
    items.set(_items);

    if (_.isFunction(config.routing)) {
      config.routing(config.name, config.href);
    }

    return {
      replace: function (config) {
        var _items = items.get();
        _items.splice(len - 1, 1, config);
        items.set(_items);
      },
      remove: function () {
        var _items = items.get();
        _items.splice(len - 1, 1);
        items.set(_items);
      }
    }
  }

  function get() {
    return _.sortBy(_.map(_.filter(items.get(), function (item) {
      return _.isFunction(item.enabled) ? item.enabled() : true;
    }), function (item) {
      item._active = _.isFunction(item.active) ? item.active(item) : FlowRouter.getRouteName() === item.name;
      return item;
    }), 'position');
  }

  return {
    register: register,
    get: get
  };
})();