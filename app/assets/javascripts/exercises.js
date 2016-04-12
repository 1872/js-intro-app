// // Exercise #1:

// Do the NASA countdown through the console. That is, the console should say:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLASTOFF!

// Hint: Use a for loop!
// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log("BLASTOFF!");




// // Exercise #2:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// Write some code that prints all the numbers in the 'numbers' array to the console.

// Hint: Use a for loop!
// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// numbers.each do |number|
//   puts number
// end
// ALTERNATE SYNTAX
// numbers.forEach(function(number) {
//   console.log(number);
// });



// // Exercise #3:

// Write code that finds the average of all the numbers in the 'numbers' array.
// Hint: Use a for loop!
// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum / numbers.length);





// // Exercise #4:

// Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

// Hint: See other hints!
// for (var i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log("FIZZBUZZ");
//   } else if (i % 5 === 0) {
//     console.log("BUZZ");
//   } else if (i % 3 === 0) {
//     console.log("FIZZ");
//   } else {
//     console.log(i);
//   }
// }




// // Exercise #5:

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// For example:
// var guess = prompt("Guess a number");
// var answer = Math.floor((Math.random() * 100) + 1);
// var guess;
// while (guess !== answer) {
//   guess = parseInt(prompt("Guess a number"));
//   if (guess > answer) {
//     console.log("Too high!");
//   } else if (guess < answer) {
//     console.log("Too low!");
//   } else {
//     console.log("Perfect!");
//     break;
//   }
// }




// // Exercise #6:

// Create a function that accepts two numbers as parameters and returns their sum.
// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
// Alternate syntax
// var addTwoNumbers = function(num1, num2) {
//   return num1 + num2;
// };
// console.log(addTwoNumbers(3, 13));
// Alternate Alternate syntax
// var addDosNumbers = (num1, num2) => {
//   return num1 + num2;
// };
// var addDosNumbers = (num1, num2) => num1 + num2;
// console.log(addDosNumbers(3, 13));

// // Exercise #7:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)
// var calculateAverage = function(inputNumbers) {
//   var sum = 0;
//   for (var i = 0; i < inputNumbers.length; i++) {
//     sum += inputNumbers[i];
//   }
//   return sum / inputNumbers.length;
// };
// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// console.log(calculateAverage(numbers));




// // Exercise #8:

// Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.
// var book = {
//   title: "A title",
//   author: "The author",
//   isbn: "3243423",
//   pages: 343,
//   year: 2013
// };
// console.log(book);



// // Exercise #9:

// Add a function to the above book object that console.logs out all the above information 
// var book = {
//   title: "A title",
//   author: "The author",
//   isbn: "3243423",
//   pages: 343,
//   year: 2013,
//   printInfo: function() {
//     console.log("Title:", this.title, "Author:", this.author);
//   }
// };
// console.log(book);
// book.printInfo();



// // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html 


