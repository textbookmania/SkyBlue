acceptedOffers = "AcceptedOffers";

AcceptedOffers = new Mongo.Collection(acceptedOffers);

AcceptedOffers.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new BuyOffer record.
   * @param doc The Offer document.
   */
  addAcceptedOffers: function(doc) {
    check(doc, AcceptedOffers.simpleSchema());
    AcceptedOffers.insert(doc);
  },

  /**
   * Invoked by AutoForm to update a BuyOffer record.
   * @param doc The BuyOffer document.
   * @param docID It's ID.
   */
  editAcceptedOffers: function(doc, docID) {
    check(doc, AcceptedOffers.simpleSchema());
    AcceptedOffers.update({_id: docID}, doc);
  },

  deleteAcceptedOffers: function(docID) {
    AcceptedOffers.remove({_id: docID});
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(acceptedOffers, function () {
    return AcceptedOffers.find();
  });
}

AcceptedOffers.attachSchema(new SimpleSchema({
  studentAccept: {
    label: "Student Accept",
    type: String,
    optional: true,
    autoform: {
      group: acceptedOffers,
      palceholder: "Student Accept"
    }
  },

  book: {
    label: "Book",
    type: String,
    optional: true,
    autoform: {
      group: acceptedOffers,
      palceholder: "Book"
    }
  },

  offer: {
    label: "Offer",
    type: Number,
    optional: true,
    autoform: {
      group: acceptedOffers,
      placeholder: "Offer"
    }
  },

  condition: {
    label: "Condition",
    type: String,
    optional: true,
    autoform: {
      group: acceptedOffers,
      palceholder: "Condition"
    }
  },

  studentID: {
    label: "Student ID",
    type: String,
    optional: true,
    autoform: {
      group: acceptedOffers,
      placeholder: "Student ID"
    }
  }
}));