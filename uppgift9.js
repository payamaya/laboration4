/* Lösning till uppgift 9. AV Paul Yashouh, 2026 */

'use strict'
// Skapa en array med tre objekt
const person = [
  {
    name: 'Anna',
    age: 30,
    city: 'Sundsvall',
  },
  {
    name: 'Sofie',
    age: 45,
    city: 'Hudiksvall',
  },
  {
    name: 'Markus',
    age: 16,
    city: 'Härnösand',
  },
]
// Funktion för att skriva ut om en person
function personInformation(arr) {
  // loopa genom arrayen (for loop) för varje person namn och stad
  for (let i = 0; i < arr.length; i++) {
    // villkor om person är myndig eller ej
    if (arr[i].age < 18) {
      console.log(`${arr[i].name} bor i ${arr[i].city} och är inte myndig`)
    } else {
      console.log(`${arr[i].name} bor i ${arr[i].city} och är myndig`)
    }
  }
}
personInformation(person)
