// Variables for retrieving amazon book image.
var amazonImg = "http://images.amazon.com/images/P/";
var imgConfig = ".01._SCMZZZZZZZ_.jpg"

/**
 * This function returns a
 * URL to am image of a book.
 * @param ISBN , only supports ISBN-10
 * @return URL to a book image
 */
function getImg(ISBN){
    return amazonImg + ISBN + imgConfig;
}


Template.ListTextBook.helpers({

    /**
     * @returns {*} All of the Contact documents.
     */


textbookList: function () {
        return Textbook.find();
    }

});

Template.ListTextBook.events ({

  'click .deleteTextbook': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentContactId = this._id;
      Meteor.call('deleteTextbook', currentContactId);
      Router.go('listtextbook');
    }
  }
})
