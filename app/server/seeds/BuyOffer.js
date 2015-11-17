/**
 * A list of BuyOffer to pre-fill the Collection.
 * @type {*[]}
 */
var buyOfferSeeds = [
  {title: "Basket", author: "Bob", isbn: "1", offer: "1", deadline: "May 5, 2016"}
];

/**
 * Initialize the BuyOffer collection if empty with seed data.
 */
if (BuyOffer.find().count() === 0) {
  _.each(buyOfferSeeds,  function(buyOffer) {
    BuyOffer.insert(buyOffer);
  });
}
