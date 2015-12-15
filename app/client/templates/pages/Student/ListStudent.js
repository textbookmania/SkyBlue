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
      console.log(this.email);
      var username = this.email;

      BanStud.insert({email: username});
      /*
      Meteor.call("deleteStudent", currentPostId);
      Router.go('ListStudent'); */
    }
  }
});