/* Lösning till uppgift 3. AV Paul Yashouh, 2026 */
'use strict'
//Skapa age variabel förålder
let age = 64
// If-stas för att kontrollera anvädarens ålder
if (age < 18) {
  // Skriv ut Barn i konsolen om personen är under 18år
  console.log(`Barn`)
}
// Else if-sats om personen är mellan 18 och 65 år
else if (age >= 18 && age < 65) {
  // Skriv ut Vuxen i konsolen om villkoret är uppfyllt
  console.log(`Vuxen`)
}
// Else-sats om tidiigare villkoren inte är uppfyllda
else {
  // Skriv ut Persinonär i konsolen
  console.log(`Pensionär`)
}
