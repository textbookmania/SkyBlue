Template.ListSellOffer.helpers({

  /**
   * @returns {*} All of the BuyOffer documents.
   */
  sellOfferList: function () {
    var currDate = new Date();
    return SellOffer.find({ "expirationDate": {$gt: currDate} }, {sort: {book: 1, offer: 1}});
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


Template.ListSellOffer.events({

  'click .accept': function (e) {
    e.preventDefault();

    studentnotif = Student.findOne({email: this.studentID}).notif;

    if(studentnotif) {
      Meteor.call('sendEmail',
          this.studentID + "@hawaii.edu",
          'SkyBlue@textbookmania.com',
          'Your textbook offer has been accepted ',
          'Your Sell Offer has been accepted by: ' + Meteor.user().profile.name + '\n' + "Title: " + this.book
          + '\n' + "Offer: " + this.offer );
    }


    AcceptedOffers.insert(
        {studentAccept: Meteor.user().profile.name,
         book: this.book,
         offer: this.offer,
         condition: this.condition,
          studentID: this.studentID}
    );

    alert("Your request has been sent");
  }
});
