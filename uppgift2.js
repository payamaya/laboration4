'use strict'
// Price and numOfproduct can change
let price = 100
let numOfProduct = 3
// calculation want
const totalPrice = price * numOfProduct
const priceInclusiveVAT = totalPrice * 1.25

console.log(`Pris: ${price}kr`)
console.log(`Antal: ${numOfProduct}`)
console.log(`Totalt: ${totalPrice}kr`)
console.log(`Totalt inklusive moms: ${priceInclusiveVAT}kr`)
