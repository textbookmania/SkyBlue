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
  }
});

Template.AddSellOffer.events({
  'click .matches1': function(e) {
    e.preventDefault();

    var BookName = AutoForm.getFieldValue('book', 'AddSellOfferForm');
    var currOffer = AutoForm.getFieldValue('offer', 'AddSellOfferForm');
    var currCond = AutoForm.getFieldValue('condition', 'AddSellOfferForm');
    var currDate = new Date();

    if (currCond === "Don't Care") {
      SellOfferMatchList =  BuyOffer.find({book: BookName, offer: { $gte : currOffer}, expirationDate: {$gt: currDate} });
    }
    else if (currOffer == null && currCond == null) {
      SellOfferMatchList =  BuyOffer.find({book: BookName, expirationDate: {$gt: currDate}});
    }
    else if (currOffer == null) {
      SellOfferMatchList =  BuyOffer.find({book: BookName, condition: currCond, expirationDate: {$gt: currDate}});
    }
    else if (currCond == null) {
      SellOfferMatchList =  BuyOffer.find({book: BookName, offer: { $gte : currOffer}, expirationDate: {$gt: currDate} });
    }
    else {
      SellOfferMatchList =  BuyOffer.find({book: BookName, offer: { $gte : currOffer}, condition: currCond, expirationDate: {$gt: currDate}});
    }
    Router.go('ListSellOfferMatches');
  }
});