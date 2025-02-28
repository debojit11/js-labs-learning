/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */

let number1= 3874;
let number2 = 2398;
let number3 = 1234;
let luckyNumber = 7;
let sum = number1 + number2 + number3;
console.log("sum of the numbers:", sum);

let largest = Math.max(number1, number2, number3);
let smallest1 = Math.min(number1, number2, number3);
let smallest2 = number1+number2+number3-largest-smallest1;
let subtract = largest- (smallest1+smallest2);
console.log("subtracting the two smallest numbers from the larger one:", subtract);

let multiply = number1*number2*number3;
console.log("multiplying all the numbers:", multiply)

let divide =  largest/(Math.abs(smallest1-smallest2));
console.log("largest number divided by the difference between the smaller ones:", divide);

let modulo = [number1%luckyNumber, number2%luckyNumber, number3%luckyNumber];
console.log("result of the the numbers modulo 7:", modulo);