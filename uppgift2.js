/* Lösning till uppgift 2. AV Paul Yashouh, 2026 */
'use strict'
// Skapa varaibel som lagrar priset för en produkt
let price = 100
// Skapa variabel som lagrar antalet produkter
let numOfProduct = 3
// Beräkna totalPrice med multiplikation av pris och antal
const totalPrice = price * numOfProduct
// Beräkna totalproset inklusive 25% moms genom att multiplicera med 1.25
const priceInclusiveVAT = totalPrice * 1.25
// Skriv ut priset i konsolen
console.log(`Pris: ${price} kr`)
// Skriv ut antal produkter i konsolen
console.log(`Antal: ${numOfProduct}`)
// Skriv ut totalPrice i konsolen
console.log(`Totalt: ${totalPrice} kr`)
// Skriv ut totalPrice inklusive moms i konsolen
console.log(`Totalt inklusive moms: ${priceInclusiveVAT} kr`)
