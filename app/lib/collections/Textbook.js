/**
 * Created by sora on 11/29/15.
 */



textbook = "Textbook";
Textbook = new Mongo.Collection(textbook);

Meteor.methods({
    /**
     * Invoked by AutoForm to add a new Textbook record.
     * @param doc The Textbook document.
     */
    addTextbook: function(doc) {
        check(doc, Textbook.simpleSchema());
        Textbook.insert(doc);
    },
    /**
     *
     * Invoked by AutoForm to update a Textbook record.
     * @param doc The Textbook document.
     * @param docID It's ID.
     */
    editTextbook: function(doc, docID) {
        check(doc, Textbook.simpleSchema());
        Textbook.update({_id: docID}, doc);
    },

    deleteTextbook:function(docID){
        Textbook.remove(docID);
    }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
    Meteor.publish(textbook, function () {
        return Textbook.find();
    });
}

/**
 * Create the schema for Textbook
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
// TODO: Auto generate picture from ISBN.
Textbook.attachSchema(new SimpleSchema({
    title: {
        label: "Title",
        type: String,
        optional: false,
        autoform: {
            group: textbook,
            placeholder: "Title"
        }
    },
    course: {
        label: "Course",
        type: String,
        optional: false,
        autoform: {
            group: textbook,
            placeholder: "Course"
        }
    },
    picture: {
        label: "URL",
        type: String,
        optional: false,
        autoform: {
            group: textbook,
            placeholder: "URL"
        }
    },
    author: {
        label: "Author",
        type: String,
        optional: false,
        autoform: {
            group: textbook,
            placeholder: "Author"
        }
    },
    isbn: {
        label: "ISBN",
        type: String,
        optional: false,
        max: 10,
        autoform: {
            group: textbook,
            placeholder: "ISBN-10"
        }
    },
    condition: {
        label: "Condition",
        type: String,
        optional: false,
        max: 20,
        autoform: {
            group: textbook,
            placeholder: "Condition"
        }
    }

}));

