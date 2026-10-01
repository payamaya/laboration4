/* Lösning till uppgift 7. AV Paul Yashouh, 2026 */

'use strict'
//Skapa en array med minst sex tal
const arrayToSum = [21, 43, 56, 77, 11, 92]
// Skapa en funktion som tar emot arrayen som parameter
function calculateArraySum(arr) {
  // Startvärde 0
  let totalToSum = 0

  // loopa genom arrayens innehåll
  for (let i = 0; i < arr.length; i++) {
    // spara summan i variable totalToSum
    totalToSum += arr[i]
  }
  // returnera summan
  return totalToSum
}
// Anropa funktionen med arrayen och skriv ut resultatet
console.log('Summan är ', calculateArraySum(arrayToSum))
