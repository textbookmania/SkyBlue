student = "Student";

Student = new Mongo.Collection(student);

Accounts.onLogin(function () {
  if (Meteor.user().profile.name && _.contains(Meteor.settings.admin_users, Meteor.user().profile.name)) {
    Roles.addUsersToRoles(Meteor.userId(), 'admin');
  }

  if (Meteor.isServer) {
    if (!_.findWhere(Student.find().fetch(), {email: Meteor.user().profile.name})) {
      Student.insert({
        'email': Meteor.user().profile.name
      });
    }
  }
});

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new BuyOffer record.
   * @param doc The Offer document.
   */
  addStudent: function(doc) {
    check(doc, Student.simpleSchema());
    Student.insert(doc);
  },

  /**
   * Invoked by AutoForm to update a BuyOffer record.
   * @param doc The BuyOffer document.
   * @param docID It's ID.
   */
  editStudent: function(doc, docID) {
    check(doc, Student.simpleSchema());
    Student.update({_id: docID}, doc);
  },

  deleteStudent: function(docID) {
    Student.remove({_id: docID});
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(student, function () {
    return Student.find();
  });
}

Student.attachSchema(new SimpleSchema({
  first: {
    label: "First Name",
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: student,
      palceholder: "First Name"
    }
  },

  last: {
    label: "Last Name",
    type: String,
    optional: true,
    max: 20,
    autoform: {
      group: student,
      palceholder: "Last Name"
    }
  },

  email: {
    label: "UHID",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: student,
      palceholder: "UHID"
    }
  },

  pic: {
    label: "Pic URL",
    type: String,
    optional: true,
    autoform: {
      group: student,
      palceholder: "Pic URL"
    }
  },

  notif: {
    label: "Email Notifications",
    type: Boolean,
    optional: true,
    max: 20,
    autoform: {
      group: student,
      placeholder: "Email Notifications"
    }
  }
}));