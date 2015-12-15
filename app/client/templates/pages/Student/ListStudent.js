Template.ListStudent.helpers({

  /**
   * @returns {*} All of the BuyOffer documents.
   */
  studentList: function () {
    return Student.find();
  },

  banList: function () {
    return BanStud.find();
  }
});

Template.ListStudent.events({
  'click .deletestudent': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      var username = this.email;

      BuyOffer.find({studentID: username}).forEach( function(doc) {
        BuyOffer.remove({_id: doc._id});
      });

<<<<<<< HEAD
      SellOffer.find({studentID: username}).forEach( function() {console.log("Sell")});

      //BanStud.insert({email: username});


      /*
=======
      SellOffer.find({studentID: username}).forEach( function(doc) {
        SellOffer.remove({_id: doc._id});
      });

      BanStud.insert({email: username});

>>>>>>> origin/master
      Meteor.call("deleteStudent", currentPostId);
      Router.go('ListStudent');
    }
  },

  'click .unban': function(e) {
    e.preventDefault();
    var currentPostId = this._id;

    Meteor.call("deleteBanStud", currentPostId);
    Router.go('ListStudent');
  }
});