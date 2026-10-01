/* Lösning till uppgift 7. AV Paul Yashouh, 2026 */

'use strict'
//Skapa en array med minst sex tal
const arrayToSum = [21, 43, 56, 77, 11, 92]
// Funktion som tar emot arrayen som parameter och beräkna totala summan
function calculateArraySum(arr) {
  // Initiera variable med start vårde 0 för att lagra summan
  let totalToSum = 0

  // loopa igenom varje element i arrayen
  for (let i = 0; i < arr.length; i++) {
    // Addera talet i arrayen till den totala summan (tottalToSum)
    totalToSum += arr[i]
  }
  // Returnera slutliga resultatet från funktionen
  return totalToSum
}
// Anropa funktionen med arrayen och skriv ut resultatet i terminalen
console.log('Summan är ', calculateArraySum(arrayToSum))
