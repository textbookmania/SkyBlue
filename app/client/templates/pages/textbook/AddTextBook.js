AutoForm.hooks({
  AddTextbookForm: {
    /**
     * After successful form submission, go to the Listtextbooks page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ListTextBook');
    }
  }
});
