

Template.ViewYourOffers.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  viewBuyOffers: function () {
    return BuyOffer.find({studentID: Meteor.user().profile.name});
  },

  viewSellOffers: function () {
    return SellOffer.find({studentID: Meteor.user().profile.name})
  }
});