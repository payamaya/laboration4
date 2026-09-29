/* Lösning till uppgift 6. AV Paul Yashouh, 2026 */
'use strict'
// Skapa funktion som beräknar arean av en rektangel
function calculateArea(width, height) {
  // Beräkna arean genom multiplikation aritmetisk(*: gånger) som multiplicerar bredd och höjd och returnerar resultatet
  return width * height
}
// Anropa funktionen fyra gånger med olika värden och skriver ut resultatet i terminalen
console.log(`Arean är ${calculateArea(12, 4)}`)
console.log(`Arean är ${calculateArea(5, 8)}`)
console.log(`Arean är ${calculateArea(4, 8)}`)
console.log(`Arean är ${calculateArea(12, 9)}`)
