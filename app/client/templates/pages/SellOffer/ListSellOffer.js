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