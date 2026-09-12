const dishes = [
  'Spaghetti Bolognese',
  'Chicken Tikka Masala',
  'Sushi Rolls',
  'Tacos al Pastor',
  'Mushroom Risotto',
]
// print the entire array
console.log('Entire array:', dishes)
// print the first element
console.log(`First element`, dishes[0])
// Prints last element
console.log(`Last element:`, dishes[dishes.length - 1])
// Add a new dish to the last of the array
dishes.push('Moussaka')
//  Remove the first dish
dishes.shift()

// Print again
console.log('Array after changes:', dishes)
