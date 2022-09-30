//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 

let myName = 'Austin Holmes'
// created the variable requested and gave my name as the value

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE

let faveNum = 2
// I chose 2 because I do not have a favorite number

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE

let lovesCode = true
// I assigned the value true to lovesCode, as a boolean value can only be true or false

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE

if (faveNum === 13) {
  console.log('lucky 13!')
} else {
  console.log('not lucky 13')
}

//console.log(faveNum)
// Since the conditions set up in the if statement were equal to or not equal to 13, and my number value was 2, the console logged 'not lucky 13'

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE

for (i=0; i<5; i++) {
  console.log(faveNum)
}

// setting the iterator to <5 on the second argument causes the loop to occur five times, as the increment is set to increase by 1 each loop, and was initially given the value of 0, therefore printing the result of the loop five times.