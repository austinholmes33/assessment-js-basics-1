//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

let colorCopy = faveColors.slice(0, 3)
// console.log(colorCopy)
// I created the variable requested, then assigned the value of the original array, with the slice function applying from the index 0 up to 3, in order to copy every element within the array

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE

colorCopy.push('blue')
//console.log(colorCopy)
// I used the method push to add the string value 'blue' onto the end of the array

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE

const middleNums = numbers.splice(1, 3)
// console.log(middleNums)
// I used the splice method to specify the middle numbers of the original array and place them in the new array, while leaving off the third argument, as nothing needed to be replaced in the original array

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE

const answers = []

for (let i=0; i<bigOrSmallArray.length; i++) {
  if (bigOrSmallArray[i] > 100) {
    answers.push('big')
  } else if (bigOrSmallArray[i] < 100) {
    answers.push('small')
  }
}
//console.log(answers)
// I created the variable answers and set its value to an empty array. Then, I created a for loop for the original array, designed to loop over the array and apply methods based on conditions specified in the if/else if statement nested within the loop. At first...
// ...it did not work, but I found that the issue was because I had only specified [i] in the if statement conditions, not bigOrSmallArray[i]. After making this change, it worked as requested. 