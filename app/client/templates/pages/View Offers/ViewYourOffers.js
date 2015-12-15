Template.ViewYourOffers.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */

  viewAcceptedOffer: function(){
    return AcceptedOffers.find({studentID: Meteor.user().profile.name});
  },

  viewBuyOffers: function () {
    return BuyOffer.find({studentID: Meteor.user().profile.name});
  },

  viewSellOffers: function () {
    return SellOffer.find({studentID: Meteor.user().profile.name})
  },

  formatDate: function (date) {
    var currDate = new Date();
    var newDate = moment(date).format('ll');
    if (date <= currDate) {
      newDate = newDate.fontcolor("red");
      return newDate;
    }

    return newDate;
  },

  formatTime: function (date) {
    var currDate = new Date();
    var newDate = moment(date).format('h:mm a');
    if (date <= currDate) {
      newDate = newDate.fontcolor("red");
      return newDate;
    }

    return newDate;
  }
});

Template.ViewYourOffers.events({
  'click .deletebuy': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Meteor.call("deleteBuyOffer", currentPostId);
      Router.go('ViewYourOffers');
    }
  },

  'click .deletesell': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Meteor.call("deleteSellOffer", currentPostId);
      Router.go('ViewYourOffers');
    }
  },

  'click .deleteaccept': function(e) {
    e.preventDefault();

    if (confirm("Delete this accept?")) {
      var currentPostId = this._id;
      Meteor.call("deleteAcceptedOffers", currentPostId);
      Router.go('ViewYourOffers');
    }
  }
});