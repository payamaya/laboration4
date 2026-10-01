/* Lösning till uppgift 3. AV Paul Yashouh, 2026 */

'use strict'

let age = 64
if (age < 18) {
  console.log(`Barn`)
} else if (age >= 18 && age < 65) {
  console.log(`Vuxen`)
} else {
  console.log(`Pensionär`)
}
