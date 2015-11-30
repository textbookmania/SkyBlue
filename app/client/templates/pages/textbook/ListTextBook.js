

Template.ListTextBook.helpers({

    /**
     * @returns {*} All of the Contact documents.
     */


textbookList: function () {
        return Textbook.find();
    }

});