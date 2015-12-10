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
};



Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Textbook"); },
  loadingTemplate: 'Loading'
});


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("SellOffer"); },
  loadingTemplate: 'Loading'
});


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

Router.route('/about', {
  name: 'About'
});

Router.route('/help', {
  name: 'Help'
});

Router.route('/listtextbook', {
  name: 'ListTextBook'
});

Router.route('/buyoffer-list', {
  name: 'ListBuyOffer'
});

Router.route('/listbuyoffermatches', {
  name: 'ListBuyOfferMatches'
});

Router.route('/listselloffermatches', {
  name: 'ListSellOfferMatches'
});

Router.route('/buyoffer-add', {
  name: 'AddBuyOffer'
});

Router.route('/buyoffer', {
  name: 'BuyOffer'
});

Router.route('/liststudent', {
  name: 'ListStudent'
});

Router.route('/addtextbook', {
  name: 'AddTextBook'
});

Router.route('/edittextbook/:_id', {
  name: 'EditTextBook',
  data: function() { return Textbook.findOne(this.params._id); }
});

Router.route('/addstudent', {
  name: 'AddStudent'
});

Router.route('/buyoffer-edit/:_id', {
  name: 'EditBuyOffer',
  data: function() { return BuyOffer.findOne(this.params._id); }
});

Router.route('/student/', {
  name: 'EditStudent',
  data: function() { return Student.findOne({email: checkUsername()}) }
});

Router.route('/viewyouroffers', {
  name: 'ViewYourOffers'
});


Router.route('/selloffer-list', {
  name: 'ListSellOffer'
});

Router.route('/selloffer-add', {
  name: 'AddSellOffer'
});

Router.route('/selloffer', {
  name: 'SellOffer'
});

Router.route('/selloffer-edit/:_id', {
  name: 'EditSellOffer',
  data: function() { return SellOffer.findOne(this.params._id); }
});


