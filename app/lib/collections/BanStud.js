banStud = "BanStud";

BanStud = new Mongo.Collection(banStud);

BanStud.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new BuyOffer record.
   * @param doc The Offer document.
   */
  addBanStud: function(doc) {
    check(doc, BanStud.simpleSchema());
    BanStud.insert(doc);
  },

  deleteBanStud: function(docID) {
    BanStud.remove({_id: docID});
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(banStud, function () {
    return BanStud.find();
  });
}

BanStud.attachSchema(new SimpleSchema({
  email: {
    label: "UHID",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: banStud,
      palceholder: "UHID"
    }
  }
}));