/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two dimensional array.
 * 3. Pick 5 things from the two dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create a array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create a array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */

arr1 = ["chair", "keyboard", "mouse", "laptop"];
arr2 = [
    ["pen", "books", "pencil", "eraser", "wire"],
    ["comb", "watch", "perfume", "keys", "wallet"],
    ["phone", "charger", "headphones", "glasses", "notebook"]
]

console.log(arr2[0][0], arr2[1][1], arr2[0][2], arr2[2][3], arr2[0][4]);

arr3=[]
for(let i=1;i<=100;i++){
    arr3.push(i);
}

function sumArray(arr){
    let sum=0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log("Sum of numbers 1 to 100:", sumArray(arr3));

function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}
arr4=[];
for(let i=0;i<100;i++){
    arr4.push(getRandomNumber());
}

even=[];
odd=[];
for(let i=0;i<arr4.length;i++){
    if (arr4[i]%2==0){
        even.push(arr4[i]);
    }
    else{
        odd.push(arr4[i]);
    }
}

console.log("Sum of even numbers:", sumArray(even));
console.log("Sum of odd numbers:", sumArray(odd));