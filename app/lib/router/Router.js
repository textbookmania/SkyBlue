/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */

/**
 * This function returns the username of the user
 * before getting the data of the user's profile.
 * @returns profile name of user
 */
checkUsername = function() {
  if (Meteor.user()) {
    if (!Meteor.loggingIn()) {
      return Meteor.user().profile.name;
    }
  }
}


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("BuyOffer"); },
  loadingTemplate: 'Loading'
});

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Student"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/listtextbook', {
  name: 'ListTextBook'
});

Router.route('/list', {
  name: 'ListBuyOffer'
});

Router.route('/add', {
  name: 'AddBuyOffer'
});

Router.route('/buyoffer', {
  name: 'BuyOffer'
});

Router.route('/liststudent', {
  name: 'ListStudent'
});

Router.route('/addstudent', {
  name: 'AddStudent'
});

Router.route('/stuff/:_id', {
  name: 'EditBuyOffer',
  data: function() { return BuyOffer.findOne(this.params._id); }
});

Router.route('/student/', {
  name: 'EditStudent',
  data: function() { return Student.findOne({email: checkUsername()}) }
});