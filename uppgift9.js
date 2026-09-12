'use strict'

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

function personInformation(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < 18) {
      console.log(`${arr[i].name} bor i ${arr[i].city} och är inte myndig`)
    } else {
      console.log(`${arr[i].name} bor i ${arr[i].city} och är myndig`)
    }
  }
}
personInformation(person)
