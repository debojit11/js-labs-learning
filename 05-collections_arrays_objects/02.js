// This array is made up of lengths in Centimeters
lengths = [
    231, 432, 342, 543, 678, 756, 543, 654, 109, 239, 349,
    654, 323, 573, 432, 345, 549, 943, 999, 111, 100, 934,
    934, 342, 543, 442, 726, 432, 123, 657, 432, 654, 435
];

/**
 * 1. Use a for loop and one of the functions you wrote in previous labs to
 *    create a new list of the lengths in inches.
 * 2. Use another for loop to log the average length in cm and inches. Log the
 *    result with string interpolation. For example, "The average length in cm
 *    is ___ , which is ___ in inches"
 *
 * You don't have to reference other JavaScript files or anything, just copy and
 * paste the code you wrote previously into this file.
 */


function CmToInch(cm){
    return cm/2.54;
}

let lengthsInInches = [];
for (let i=0; i<lengths.length; i++){
    lengthsInInches.push(CmToInch(lengths[i]));
}

let sumCm = 0;
let sumInch = 0;
for (let i=0; i<lengths.length; i++){
    sumCm += lengths[i];
    sumInch += lengthsInInches[i];
}

let avgCm = sumCm/lengths.length;
let avgInch = sumInch/lengths.length;

console.log(`The average length in cm is ${avgCm}, which is ${avgInch} in inches`);
