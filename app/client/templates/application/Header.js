Template.Header.helpers({
  isCurrentPage: function(pageName) {
    console.log(Router.current().route.getName());
    return Router.current().route.getName() == pageName;
  }
});