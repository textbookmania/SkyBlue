Template.ListStudent.helpers({

  /**
   * @returns {*} All of the BuyOffer documents.
   */
  studentList: function () {
    return Student.find();
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

      SellOffer.find({studentID: username}).forEach( function() {console.log("Sell")});

      //BanStud.insert({email: username});


      /*
      Meteor.call("deleteStudent", currentPostId);
      Router.go('ListStudent'); */
    }
  }
});