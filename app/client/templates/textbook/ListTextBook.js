

/*TODO: move this code to server directory*/
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
/* TODO: move this code to server directory */
var textbookSeeds = [

    {course: "ICS111",picture: getImg("0470509473"), title: "Java Concepts: Compatible with Java 5, 6 and 7 6th Edition", author:" Cay S. Horstmann",isbn:"0470509473"},
    {course: "ICS141",picture: getImg("0073383090"), title: "Discrete Mathematics and Its Applications Seventh Edition 7th Edition", author:"Kenneth Rosen",isbn:"0073383090"},
    {course: "ICS211",picture: getImg("0470128704"), title: "Data Structures: Abstraction and Design Using Java 2nd Edition", author:"Elliot B. Koffman",isbn:"0470128704"},
    {course: "ICS212",picture: getImg("0131103628"), title: "The C Programming Language 2nd Edition", author:"Brian W. Kernighan",isbn:"0131103628"},
    {course: "ICS212",picture: getImg("0321776402"), title: "C++ Primer Plus (6th Edition) (Developer's Library) 6th Edition", author:"Stephen Prata",isbn:"0321776402"},
    {course: "ICS311",picture: getImg("0262033844"), title: "Introduction to Algorithms, 3rd Edition 3rd Edition", author:"Thomas H. Cormen",isbn:"0262033844"},

    {course: "ICS313",picture: getImg("0123745144"), title: "Programming Language Pragmatics, Third Edition", author:"Michael L. Scott",isbn:"0123745144"},

    {course: "ICS313",picture: getImg("1593272812"), title: "Land of Lisp: Learn to Program in Lisp, One Game at a Time! 1st Edition", author:"Conrad Barski",isbn:"1593272812"},

    {course: "ICS321",picture: getImg("0131873253"), title: "Database Systems: The Complete Book (2nd Edition)", author:"Hector Garcia-Molina (Author), Jeffrey D. Ullman (Author), Jennifer Widom (Author)",isbn:"0131873253"},

    {course: "ICS331",picture: getImg("1107027535"), title: "Digital Logic Design: A Rigorous Approach 1st Edition", author:"Guy Even",isbn:"1107027535"},
    {course: "ICS332",picture: getImg("1118063333"), title: "Operating System Concepts 9th Edition", author:"Abraham Silberschatz",isbn:"1118063333"},

    {course: "ICS390",picture: getImg("0132855534"), title: "Ethics for the Information Age (5th Edition)", author:"Michael J. Quinn",isbn:"0132855534"},
    {course: "ICS419",picture: getImg("0465051367"), title: "Emotional Design: Why We Love (or Hate) Everyday Things", author:"Don Norman",isbn:"0465051367"},
    {course: "ICS419",picture: getImg("0465067107"), title: "The Design of Everyday Things", author:" Donald A. Norman",isbn:"0465067107"},
    {course: "ICS462",picture: getImg("0137144172"), title: "Presenting to Win: The Art of Telling Your Story, Updated and Expanded Edition 1st Edition", author:"Jerry Weissman",isbn:"0137144172"},
    {course: "ICS390",picture: getImg("0123747317"), title: "Artificial Intelligence for Games 2nd Edition", author:"Ian Millington",isbn:"0123747317"}
];


Template.ListTextBook.helpers({

    /**
     * @returns {*} All of the Contact documents.
     */


textbookList: function () {
        return textbookSeeds;
    }

});