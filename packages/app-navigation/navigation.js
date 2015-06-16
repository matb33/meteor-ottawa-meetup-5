Template.bind(Template.navigation, "nav");

Template.navigation.helpers({
  sections: function () {
    return NavManager.get();
  }
});