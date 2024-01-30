// /***

// Subtask-1:

// Find all the odd numbers from 61 to 100.

//  */

let oddNums=61;
while(oddNums<=100){
    if(oddNums % 2===1){
        console.log('odd number'+oddNums);
    }
    oddNums++;

}



// /***

// Subtask-2:

// Find all the even numbers from 78 to 98.

//  */

let evenNums=78;
while(evenNums<=98){
    if(evenNums%2===0){
        console.log('even number:'+evenNums)
    }
    evenNums++;
}


// /***

// Subtask-3:

// Display sum of all the odd numbers from 81 to 131.

//  */

let i=81;
let sum=0;
while(i<=131){
    if(i%2===1){
    sum=sum+i;
    }
    i++;
}
console.log('sum of odd numbers: '+sum);

// /*
// Subtask-4:

// Display sum of all the even numbers from 206 to 311.

//  */

let num=206;
let sums=0;

while(num<=311){
    if(num%2===0){
        sums+=num;
        console.log(num);
    }
    num++
}
console.log('sum of even numbers: '+sums);

