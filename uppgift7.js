'use strict'

const arrayToSum = [21, 43, 56, 77, 11, 92]

function calculateArraySum(arr) {
  let totalToSum = 0
  for (let i = 0; i < arr.length; i++) {
    totalToSum += arr[i]
  }
  return totalToSum
}
// const result = calculateArraySum(arrayToSum)
// console.log('Summan är ', result)
console.log('Summan är ', calculateArraySum(arrayToSum))
