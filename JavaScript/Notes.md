# JavaScript :

Variable, Arrays, Loops, Functions, Classes, Objects 

# Variables
c = 20; // Global variable 
var d = 30; // Function Scope 
let e = 40; // Block Scope 

# example:
// Checking and Understanding the let, var and global variable
function fun () {
    let c = 10;
    if(c==10){
        let d =5;
        console.log("Inside the if block",d);
    }
    console.log("Outside :",d);
}
 
 # Output 
Inside the if block 5
Practice.js:16 Uncaught ReferenceError: d is not defined
    at fun (Practice.js:16:29)
    at <anonymous>:1:2

# Observation 
 We have defined the d inside the if block using the let so it gave it the scope till the end of the if block 


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