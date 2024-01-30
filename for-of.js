const fruits =['mango','banana','kiwi','strawbery','jackfruit'];

for(const fruit of fruits){
    console.log(fruit);
}

/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 9

 */

for(let i=1;i<=10;i++){
    let multiply =i*9;
    console.log(multiply);
}

// countdown time from 81 to 65
for(let n=81;n>=65;n--){
    console.log(n);
}

/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

for(let time=1;time<=60;time++){
    console.log('I will invest at least 6 hrs every single day for next 60 days!" this message 60 times day:'+time);
}

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

for(let odd = 61;odd<=100;odd++){
    if(odd%2 !==0){
        console.log('odd number: '+odd);
    }
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

for(let even=78;even<=98;even++){
    if(even % 2==0){
        console.log('even number: '+even);
    }
}


/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let sum=0;
for(let sumOdd=91;sumOdd<=129;sumOdd++){
    if(sumOdd%2==1){
    sum+=sumOdd;
    }

}
console.log(sum);

/*
Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
let sums=0;
for(let sumEven=51;sumEven<=85;sumEven++){
    if(sumEven%2 ===0){
        sums+=sumEven;
    }
}
console.log(sums);


