/**
 * A list of BuyOffer to pre-fill the Collection.
 * @type {*[]}
 */
tempDate = new Date();
tempDate.setDate(tempDate.getDate() + 1);

tempExDate = new Date();
tempExDate.setDate(tempDate.getDate() - 1);

var buyOfferSeeds = [
  {book: "Learning to Program with Alice", offer: 150, condition: "Excellent", expirationDate: tempDate, studentID: "aljonp"},
  {book: "Learning to Program with Alice", offer: 150, condition: "Don't Care", expirationDate: tempDate, studentID: "kayama"},
  {book: "Learning to Program with Alice", offer: 120, condition: "Don't Care", expirationDate: tempDate, studentID: "khongnaw"},
  {book: "Emotional Design: Why We Love (or Hate) Everyday Things", offer: 80, condition: "Good", expirationDate: tempDate, studentID: "aljonp"},
  {book: "Emotional Design: Why We Love (or Hate) Everyday Things", offer: 90, condition: "Don't Care", expirationDate: tempDate, studentID: "kayama"},
  {book: "Emotional Design: Why We Love (or Hate) Everyday Things", offer: 70, condition: "Excellent", expirationDate: tempDate, studentID: "khongnaw"},
  {book: "The C Programming Language 2nd Edition", offer: 150, condition: "Excellent", expirationDate: tempExDate, studentID: "aljonp"},
  {book: "The C Programming Language 2nd Edition", offer: 150, condition: "Excellent", expirationDate: tempExDate, studentID: "kayama"},
  {book: "The C Programming Language 2nd Edition", offer: 150, condition: "Excellent", expirationDate: tempExDate, studentID: "khongnaw"},
  {book: "Introduction to Algorithms, 3rd Edition 3rd Edition", offer: 40, condition: "Excellent", expirationDate: tempDate, studentID: "aljonp"},
  {book: "Programming Language Pragmatics, Third Edition", offer: 60, condition: "Excellent", expirationDate: tempDate, studentID: "kayama"},
  {book: "Land of Lisp: Learn to Program in Lisp, One Game at a Time! 1st Edition", offer: 50, condition: "Excellent", expirationDate: tempDate, studentID: "khongaw"}
];


/**
 * Initialize the BuyOffer collection if empty with seed data.
 */

if (BuyOffer.find().count() == 0) {
  _.each(buyOfferSeeds,  function(buyOffer) {
    BuyOffer.insert(buyOffer, {validate: false, getAutoValues: false});
  });
}

