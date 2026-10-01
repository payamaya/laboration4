/* Lösning till uppgift 8. AV Paul Yashouh, 2026 */
<<<<<<< HEAD
=======

>>>>>>> 8d8a73f (Add solution comments to all JavaScript files for clarity)
'use strict'
/*skapa ett objekt som representerar en bok ( titel,författare, utgivningsår)*/
const book = {
  titel: 'The Hobbit',
  författare: 'J.R.R. Tolkien',
  utgivningsår: 1937,
}
// Skapa en funktionsom tar emot objekt bok
function bookObj(myBook) {
  // skriv ut informationen om booken
  console.log(`Titel: ${myBook.titel}`)
  console.log(`Författare: ${myBook.författare}`)
  console.log(`Utgivningsår: ${myBook.utgivningsår}`)
}
// Anropar funktion bookObj med objektet som parameter
bookObj(book)
