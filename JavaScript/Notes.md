# JavaScript :
 # Day 1:
Variable, Arrays, Loops, Functions, Classes, Objects 

# Variables
c = 20; // Global variable 
var d = 30; // Function Scope 
let e = 40; // Block Scope 

# Example 1: Using the let
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

# Example 2: Using the var
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


# Output:
Inside the if block 5
Outside : 5
Practice.js:16 Uncaught ReferenceError: d is not defined
    at fun (Practice.js:16:29)
    at <anonymous>:1:2

# Observation :
Here the var has a function scope so it can be used in the whole function block and it shows not defined for the fun2().


# Example 3: Using the Global variable 

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

# Output:
fun1()
 Inside the if block 5
 Outside : 5

fun2()
 5

# Observation 
Here the d is the Global so can be accessed Everywhere


# Function :

function sq(a){
    return Math.sqrt(a);
}