'use strict'
const maxNumber = 20

for (let i = 1; i <= maxNumber; i++) {
  // Prints all integers from 1 to 20.
  console.log(i)
  // Only even numbers are printed
  if (i % 2 === 0) {
    console.log(`${i} is even`)
  }
}
