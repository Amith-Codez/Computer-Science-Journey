// Introduction to JavaScript

let a = 10;
console.log(a); // output : 10

let b =[1,2,3,4,5];
console.log(b); // output : [ 1, 2, 3, 4, 5 ]

// Checking and Understanding the let, var and global variable

// let 

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

    // var
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

// Global variable :

// Without Global Variable 
function fun1 () {
    let c = 10;
    if(c==10){
        var d =5;
        console.log("Inside the if block",d);
    }
    console.log("Outside :",d);
}

function fun2(){
    console.log(d);
}

// Output:
    /*
Practice.js:55 Uncaught ReferenceError: d is not defined
    at fun2 (Practice.js:55:17)
    at <anonymous>:1:1
    */

// With Global Variable 
    function fun4 () {
    let c = 10;
    if(c==10){
        e =5;
        console.log("Inside the if block",e);
    }
    console.log("Outside :",e);
}

function fun3(){
    console.log(e);
}

// Output :
/*
fun4()
Practice.js:69 Inside the if block 5
Practice.js:71 Outside : 5
undefined
fun3()
Practice.js:75 5
*/


// Functions:
function sq(a){
    return Math.sqrt(a);
    console.log("First Declaration");
}

// Function Hoisting :
var sqrt = function(){
    console.log("Second Declaration");
}
