
//TODO: Put this into a collection and allow admins to modify this value.
//TODO: Clean out comments within the code.

var expirationINS = 1; //Expired in 1 day from the day that a document was created.


selloffer = "SellOffer";  // avoid typos, this string occurs many times.

SellOffer = new Mongo.Collection(selloffer);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new SellOffer record.
   * @param doc The Offer document.
   */
  addSellOffer: function(doc) {
    check(doc, SellOffer.simpleSchema());
    SellOffer.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a sellOffer record.
   * @param doc The SellOffer document.
   * @param docID It's ID.
   */
  editSellOffer: function(doc, docID) {
    check(doc, SellOffer.simpleSchema());
    SellOffer.update({_id: docID}, doc);
  },

  deleteSellOffer: function(docID) {
    SellOffer.remove({_id: docID});
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(selloffer, function () {
    return SellOffer.find();
  });
}

//allowedBooks = [];

/**
 * Create the schema for SellOffer
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */

SimpleSchema.messages({
  "duplicateSell": "You already have the same offer in Buy Offer"
});

SellOffer.attachSchema(new SimpleSchema({
  /*
  title: {
    label: "Title",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: selloffer,
      placeholder: "Title"
    }
  },
  */
  book:{
    type: String,
    autoform:{
      group: selloffer,
      afFieldInput:{
        firstOption: "-- Select Textbook --"
      },
      options:function(){
        var books = _.pluck(Textbook.find({},{fields:{'title':1}}).fetch(), 'title');
        return _.map(books, function(value)
        {
          return {
            label: value,
            value: value
          }
        })
      }
    },
    custom: function(){
      var bkk = this.valueOf('book').value;


      var offer = BuyOffer.find({studentID: Meteor.user().profile.name,book :bkk}).fetch();
      if(offer === undefined || offer.length == 0);
      else
        return "duplicateSell";

    }
  },
  /*
  author: {
    label: "Author",
    type: String,
    optional: false,
    autoform: {
      type: "hidden",
      group: selloffer,
      placeholder: "Author"
    }
  },
  isbn: {
    label: "ISBN",
    type: Number,
    optional: false,
    autoform: {
      type: "hidden",
      group: selloffer,
      placeholder: "ISBN"
    }
  },
  */
  offer: {
    label: "Offer",
    type: Number,
    optional: false,
    autoform: {
      group: selloffer,
      placeholder: "Offer"
    }
  },
  condition: {
    label: "Condition",
    type: String,
    optional: false,
    allowedValues: [
      "Excellent", "Good", "Fair", "Poor"
    ],
    autoform: {
      group: selloffer,
      afFieldInput: {
        firstOption: "-- Select Condition --"
      },
      placeholder: "Condition"
    }
  },
  expirationDate: {
    type: Date,
    label: "Expiration",
    optional: true,
    autoValue: function(){
      d = new Date()
      d.setDate(d.getDate() + expirationINS);
      return d;
    },
    autoform: {
      type: "hidden",
      group: selloffer,
      placeholder: "Expiration Date"
    }
  },
  studentID: {
    type: String,
    label: "Student",
    optional: true,
    autoValue: function() {
      return Meteor.user().profile.name;
    },
    autoform: {
      type: "hidden",
      group: selloffer,
      placeholder: "Student"
    }
  }
}));
