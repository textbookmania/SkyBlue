var SellOfferMatchList;

Template.ListSellOfferMatches.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  sellOfferMatchList: function () {
    return SellOfferMatchList;
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

Template.AddSellOffer.events({
  'click .matches1': function(e) {
    e.preventDefault();

    var BookName = AutoForm.getFieldValue('book', 'AddSellOfferForm');
    var currOffer = AutoForm.getFieldValue('offer', 'AddSellOfferForm');
    var currCond = AutoForm.getFieldValue('condition', 'AddSellOfferForm');
    var currDate = new Date();

    if (currOffer == null && currCond == null) {
      SellOfferMatchList =  BuyOffer.find({book: BookName, expirationDate: {$gt: currDate}});
    }

    else if (currOffer == null) {
      SellOfferMatchList =  BuyOffer.find({book: BookName, condition: { $in: [currCond, "Don't Care"] }, expirationDate: {$gt: currDate}});
    }

    else if (currCond == null) {
      SellOfferMatchList =  BuyOffer.find({book: BookName, offer: { $gte : currOffer}, expirationDate: {$gt: currDate} });
    }

    else {
      SellOfferMatchList =  BuyOffer.find({book: BookName, offer: { $gte : currOffer}, condition: { $in: [currCond, "Don't Care"] }, expirationDate: {$gt: currDate}});
    }

    Router.go('ListSellOfferMatches');
  }
});

Template.ListSellOfferMatches.events({
  'click .accept4': function (e) {
    e.preventDefault();

    studentnotif = Student.findOne({email: this.studentID}).notif;

    if(studentnotif) {
      Meteor.call('sendEmail',
          this.studentID + "@hawaii.edu",
          'SkyBlue@textbookmania.com',
          'Your textbook offer has been accepted!',
          'Your Buy Offer has been accepted by: ' + Meteor.user().profile.name + '\n' + "Title: " + this.book
          + '\n' + "Offer: " + this.offer );
    }

    AcceptedOffers.insert(
        {studentAccept: Meteor.user().profile.name,
          book: this.book,
          offer: this.offer,
          condition: this.condition,
          studentID: this.studentID}
    );

    alert("Your request has been sent!");
  }
});