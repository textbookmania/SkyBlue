Template.CasLogin.events({

  /**
   * Handle the click on the logout link.
   * @param e The click event.
   * @returns {boolean} False.
   */
  'click .cas-logout': function(e) {
    e.preventDefault();
    Meteor.logout();
    return false;
  },

  /**
   * Handle the click on the login link.
   * @param e The click event.
   * @returns {boolean} False.
   */
  'click .cas-login': function(e) {
    e.preventDefault();
    var callback = function loginCallback(error){
      if (error) {
        console.log(error);
      }
    };
    Meteor.loginWithCas(callback);
    return false;
  }
});