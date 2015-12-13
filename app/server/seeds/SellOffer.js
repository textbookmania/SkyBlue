/**
 * A list of BuyOffer to pre-fill the Collection.
 * @type {*[]}
 */
tempDate = new Date();
tempDate.setDate(tempDate.getDate() + 1);

tempExDate = new Date();
tempExDate.setDate(tempDate.getDate() - 1);

var sellOfferSeeds = [
  {book: "Ethics for the Information Age (5th Edition)", offer: 150, condition: "Excellent", expirationDate: tempDate, studentID: "aljonp"},
  {book: "Ethics for the Information Age (5th Edition)", offer: 150, condition: "Good", expirationDate: tempDate, studentID: "kayama"},
  {book: "Ethics for the Information Age (5th Edition)", offer: 120, condition: "Fair", expirationDate: tempDate, studentID: "khongnaw"},
  {book: "Artificial Intelligence for Games 2nd Edition", offer: 80, condition: "Good", expirationDate: tempDate, studentID: "aljonp"},
  {book: "Artificial Intelligence for Games 2nd Edition", offer: 90, condition: "Poor", expirationDate: tempDate, studentID: "kayama"},
  {book: "Artificial Intelligence for Games 2nd Edition", offer: 70, condition: "Excellent", expirationDate: tempDate, studentID: "khongnaw"},
  {book: "C++ Primer Plus (6th Edition) (Developer's Library) 6th Edition", offer: 150, condition: "Poor", expirationDate: tempExDate, studentID: "aljonp"},
  {book: "C++ Primer Plus (6th Edition) (Developer's Library) 6th Edition", offer: 150, condition: "Excellent", expirationDate: tempExDate, studentID: "kayama"},
  {book: "C++ Primer Plus (6th Edition) (Developer's Library) 6th Edition", offer: 150, condition: "Excellent", expirationDate: tempExDate, studentID: "khongnaw"},
  {book: "Java Concepts: Compatible with Java 5, 6 and 7 6th Edition", offer: 150, condition: "Excellent", expirationDate: tempDate, studentID: "aljonp"},
  {book: "The Design of Everyday Things", offer: 150, condition: "Good", expirationDate: tempDate, studentID: "kayama"},
  {book: "Presenting to Win: The Art of Telling Your Story, Updated and Expanded Edition 1st Edition", offer: 120, condition: "Poor", expirationDate: tempDate, studentID: "khongnaw"}
];


/**
 * Initialize the BuyOffer collection if empty with seed data.
 */

if (SellOffer.find().count() == 0) {
  _.each(sellOfferSeeds,  function(sellOffer) {
    SellOffer.insert(sellOffer, {validate: false, getAutoValues: false});
  });
}

