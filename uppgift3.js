/* Lösning till uppgift 3. AV Paul Yashouh, 2026 */

'use strict'

// Skapa en variabel för ålder
let age = 64

// If-sats för att kontrollera användarens ålder
if (age < 18) {
  // Skriv ut "Barn" i konsolen om personen är under 18 år
  console.log('Barn')
}
// Else if-sats om personen är mellan 18 och 64 år
else if (age >= 18 && age < 65) {
  // Skriv ut "Vuxen" i konsolen om villkoret är uppfyllt
  console.log('Vuxen')
}
// Else-sats om de tidigare villkoren inte är uppfyllda (65 år eller äldre)
else {
  // Skriv ut "Pensionär" i konsolen
  console.log('Pensionär')
}
