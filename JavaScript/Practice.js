// Introduction to JavaScript

let a = 10;
console.log(a); // output : 10

let b =[1,2,3,4,5];
console.log(b); // output : [ 1, 2, 3, 4, 5 ]

// Checking and Understanding the let, var and global variable
function fun () {
    let c = 10;
    if(c==10){
        let d =5;
        console.log("Inside the if block",d);
    }
    console.log("Outside :",d);
}

/* output:
Inside the if block 5
Practice.js:16 Uncaught ReferenceError: d is not defined
    at fun (Practice.js:16:29)
    at <anonymous>:1:2
} */

    
function fun1 () {
    let c = 10;
    if(c==10){
        var d =5;
        console.log("Inside the if block",d);
    }
    console.log("Outside :",d);
}
/*
Output:
Inside the if block 5
Outside : 5
*/

