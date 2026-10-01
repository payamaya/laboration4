/* Lösning till uppgift 5. AV Paul Yashouh, 2026 */
'use strict'
// Skapa array som innehåller maträtter
const dishes = [
  'Spaghetti Bolognese',
  'Chicken Tikka Masala',
  'Sushi Rolls',
  'Tacos al Pastor',
  'Mushroom Risotto',
]
// Skriv ut ehela arrayen i konsolen
console.log('Entire array:', dishes)
// Skriv ut första elementet i arrayen
console.log(`First element`, dishes[0])
// // Skriv ut sista elementet i arrayen
console.log(`Last element:`, dishes[dishes.length - 1])
// Lägg till ett ny maträtt i slutet av arrayen
dishes.push('Moussaka')
// Ta bort först elementet frän arrayen
dishes.shift()
// Skriv ut arrayen igen efter modifikationen av arrayen
console.log('Array after changes:', dishes)
