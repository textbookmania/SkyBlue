
//TODO: Put this into a collection and allow admins to modify this value.
//TODO: Clean out comments within the code.

var expirationIN = 1; //Expired in 1 day from the day that a document was created.


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

//allowedBooks = [];

/**
 * Create the schema for BuyOffer
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */



BuyOffer.attachSchema(new SimpleSchema({
  /*
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
  */
  book:{
    type: String,
    autoform:{
      group: buyoffer,
      afFieldInput:{
        firstOption:"-- Select Textbook --"
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
    }
  },
  /*
  author: {
    label: "Author",
    type: String,
    optional: false,
    autoform: {
      type: "hidden",
      group: buyoffer,
      placeholder: "Author"
    }
  },
  isbn: {
    label: "ISBN",
    type: Number,
    optional: false,
    autoform: {
      type: "hidden",
      group: buyoffer,
      placeholder: "ISBN"
    }
  },
  */
  offer: {
    label: "Offer",
    type: Number,
    optional: false,
    autoform: {
      group: buyoffer,
      placeholder: "Offer"
    }
  },
  condition: {
    label: "Condition",
    type: String,
    optional: false,
    allowedValues: [
      "Excellent", "Good", "Fair", "Poor", "Don't Care"
    ],
    autoform: {
      group: buyoffer,
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
      d.setDate(d.getDate() + expirationIN);
      return d;
    },
    autoform: {
      type: "hidden",
      group: buyoffer,
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
      group: buyoffer,
      placeholder: "Student"
    }
  }
}));
