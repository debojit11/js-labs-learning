function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */

let i=5;
while (i<=1000){
    console.log(i);
    i+=5;
}

i=100;
while (i>=-100){
    console.log(i);
    i--;
}

let num=0;
i=0;
while (i<5000){
    num+=(i%2==0)?3:-1;
    i++;
}
console.log("Final number after 5000 iterations:", num);
