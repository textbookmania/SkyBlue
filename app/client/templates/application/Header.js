Template.Header.helpers({
  isCurrentPage: function(pageName) {
    return Router.current().route.getName() == pageName;
  }
});