/*
 * Fizz Buzz
 *
 * Description:
 * 1) The program prints 1 to 100.
 * 2) Each number that is evenly divisible by 3, instead of writing the number, write fizz.
 * 3) If the number is evenly divisible by 5, instead of writing the number, write buzz.
 * 4) If the number is evenly divisible by both 3 and 5, instead of writing the number or fizz or buzz, write fizzbuzz.
 */

function fizzBuzz(num) {
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function printFizzBuzzNumbers(end) {
  for (let i = 1; i <= end; i++) {
    console.log(fizzBuzz(i));
  }
}

printFizzBuzzNumbers(100);
