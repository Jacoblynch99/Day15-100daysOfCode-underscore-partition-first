const _ = require("underscore")

const numArr = [12, 3, 45, 67, 104, 0, null, 3, 12]

const isEven = (num) => {
  if (num % 2 === 0) {
    return num
  }
}

const partition = _.partition(numArr, isEven) // Returns two arrays, one array is all the elements that have passed the given function, the other is an array of the elements that have not passed the given function. This does not change the original array

const first = _.first(numArr, 5) // Return the first element in an array. If a number is provided as the second argument then it will return the number of elements equivalent to the number provided inside of a new array, and it always takes from the start of the array. This does not change the original array

console.log(`Underscore Data:`, partition)
console.log(`Original Data:`, numArr)
console.log(
  `*****************************************************************************************`
)
console.log(`Underscore Data:`, first)
console.log(`Original Data:`, numArr)
