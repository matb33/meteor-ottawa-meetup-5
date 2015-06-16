Template.bind(Template.navigation, "nav");

Template.navigation.helpers({
  items: function () {
    return NavManager.get();
  }
});