// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane' as a string.
// We check if the name variable is 'Mary. The name variable is set to Dane,
// so we console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret. We then make a variable called code and set it to 123 as a number.
// We check if the variable code is equal to 123 as a number.
// Code is equal to 123 so we set variable sectret to 'super'.
// Code is equal to the number 123 so we times code by 2. (123 x 2 = 246 so code = 246).
// We then check is code is greater than 250. 
// Code is not greater than 250 so we console.log 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create the variable isStudent and set it to the Boolean variable true.
// We create the variable age and set it to the number 34.
// We create the variable zip and set it to the number 55407.
// We check if both the variable isStudent is equal to the Boolean variable true and if zip is greater than 80000.
// We check if both the variable isStudent is equal to the Boolean variable false and if age is less than 30.
// We check if the variable isStudent is equal to the Boolean variable true.
// We then console.log 'Welcome to Prime!'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - 
// colorOne is set to 'red' and colorTwo is set to 'blue'
// Should be: let colorOne = 'blue'; let colorTwo = 'red';
// We also only set colorOne to 'purple' after checking if mix is true. 
/* Should be: if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
}
*/

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

//FIX - We started with one variable and one constant. 
// Should be: let temp = 40; let time = 4;
// We check is temp is higher than 39 OR if time is greater or equal to 4.
// should be:
/* if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}
*/


/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

//Fix - We started with one variable and one constant. 
// Should be: let age = 21; let minAge = 21;
//Instructions say we checked if age is greater or equal to minAge -- it is, so we console.log 'enter'. 
//But we checked if minAge is less than or equal to age.
// Should be: 
/*if(age >= minAge) {
  console.log('enter');
} else {
  console.log('no entry');
}
*/

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

