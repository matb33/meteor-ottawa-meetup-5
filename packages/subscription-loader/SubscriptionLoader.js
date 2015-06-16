SubscriptionLoader = function SubscriptionLoaderConstructor(instance, config) {
  var self = this;
  var readyCounts = {};
  var readyTotals = {};

  self.loaded = new ReactiveVar(false);

  config = config || {};

  if (!config.route || !_.isFunction(config.route)) {
    config.route = function () {
      FlowRouter.watchPathChange();
      var current = FlowRouter.current();
      return {
        name: current && current.route && current.route.name,
        params: current && current.params
      };
    };
  }

  instance.autorun(function () {
    var route = config.route();

    if (!config.routes || !config.routes[route.name]) return;

    readyCounts[route.name] = 0;
    readyTotals[route.name] = 0;
    self.loaded.set(false);

    config.routes[route.name].call({
      subscribe: function () {
        var args = Array.prototype.slice.call(arguments);
        var last = _.last(args);

        readyTotals[route.name]++;

        function onReady() {
          if (++readyCounts[route.name] === readyTotals[route.name]) {
            self.loaded.set(true);
            if (_.isFunction(config.ready)) {
              config.ready(route.params);
            }
          }
        }

        if (_.isFunction(last)) {
          args[args.length - 1] = function () {
            onReady();
            last.apply(this, arguments);
          };
        } else {
          args.push(onReady);
        }

        return instance.subscribe.apply(instance, args);
      }
    }, route.params);
  });
};

SubscriptionLoader.prototype.isReady = function () {
  return this.loaded.get();
};