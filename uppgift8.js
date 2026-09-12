'use strict'

const book = {
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  yearOfPublication: 1937,
}

function bookObj(myBook) {
  console.log(`Titel: ${myBook.title}`)
  console.log(`Författare: ${myBook.author}`)
  console.log(`Utgivningsår: ${myBook.yearOfPublication}`)
}
// call the function
bookObj(book)
