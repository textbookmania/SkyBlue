

Template.ViewYourOffers.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  viewBuyOffers: function () {
    return BuyOffer.find();
  },

  viewSellOffers: function () {
    return _.where(SellOffer, {studentID: Meteor.user().profile.name});;
  }
});