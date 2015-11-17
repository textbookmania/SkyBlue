buyoffer = "BuyOffer";  // avoid typos, this string occurs many times.

BuyOffer = new Mongo.Collection(buyoffer);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new BuyOffer record.
   * @param doc The Offer document.
   */
  addBuyOffer: function(doc) {
    check(doc, BuyOffer.simpleSchema());
    BuyOffer.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a BuyOffer record.
   * @param doc The BuyOffer document.
   * @param docID It's ID.
   */
  editBuyOffer: function(doc, docID) {
    check(doc, BuyOffer.simpleSchema());
    BuyOffer.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(buyoffer, function () {
    return BuyOffer.find();
  });
}

/**
 * Create the schema for BuyOffer
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
BuyOffer.attachSchema(new SimpleSchema({
  title: {
    label: "Title",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: buyoffer,
      placeholder: "Title"
    }
  },
  author: {
    label: "Author",
    type: String,
    optional: false,
    autoform: {
      group: buyoffer,
      placeholder: "Author"
    }
  },
  isbn: {
    label: "ISBN",
    type: Number,
    optional: false,
    autoform: {
      group: buyoffer,
      placeholder: "ISBN"
    }
  },
  offer: {
    label: "Offer",
    type: Number,
    optional: false,
    autoform: {
      group: buyoffer,
      placeholder: "Offer"
    }
  },
  deadline: {
    label: "Deadline",
    type: String,
    optional: false,
    autoform: {
      group: buyoffer,
      placeholder: "Deadline"
    }
  }
}));
