/* Lösning till uppgift 4. AV Paul Yashouh, 2026 */
'use strict'
// Skapa en variabel med värdet 20 för maxgränsen
const maxNumber = 20

// Loopa igenom talen från 1 till maxNumber i det här fallet 20
for (let i = 1; i <= maxNumber; i++) {
  // console.log(i)
  // If-sats modulus-operatorn(%) för att kontrollera om talet är jämnt delbart med 2
  if (i % 2 === 0) {
    // Skriv ut jämnt talet i terminalen
    console.log(`${i} is even`)
  }
}
