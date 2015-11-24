Template.ListStudent.helpers({

  /**
   * @returns {*} All of the BuyOffer documents.
   */
  studentList: function () {
    return Student.find();
  }
});