Template.ListBuyOffer.helpers({

  /**
   * @returns {*} All of the BuyOffer documents.
   */
  buyOfferList: function () {
    var currDate = new Date();
    return BuyOffer.find({ "expirationDate": {$gt: currDate} }, {sort: {book: 1, offer: 1}});
  },

  formatDate: function (date) {
    return moment(date).format('ll');
  },

  formatTime: function (date) {
    return moment(date).format('h:mm a');
  },

  isNotUser: function (studentname) {
    return studentname !== Meteor.user().profile.name;
  }
});

Template.ListBuyOffer.events({

  'click .accept2': function (e) {
    e.preventDefault();


    Meteor.call('sendEmail',
        this.studentID + "@hawaii.edu",
        'SkyBlue@textbookmania.com',
        'Your textbook offer has been accepted ',
        'Your Buy Offer has been accepted by: ' + Meteor.user().profile.name + '\n');

    alert("Your request has been sent");
    /*
     Grab all the values.
     Put it into a variable.
     acceptedUser = Meteor.user().profile.name;
     Use the email function.

     Append string username with @hawaii.edu

     check if notif is true or false

     if true,
     send email

     insert to acceptedoffers collection

     ViewAcceptedOffers.insert({grab all values and plug into item, MAKE SURE TO GRAB USER WHO CLICKED IT});

     */
  }
});