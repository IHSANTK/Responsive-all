// let a = function new1(){

//     console.log("hi")
// }

// a();
// Example using setTimeout
// setTimeout(function() {
//     console.log("This is an anonymous function called after a delay.");
//   }, 1000);
  
// const add = function (a, b) {
//     return a + b;
//   };
  
//   function operate(a, b, operation) {
//     return operation(a, b);
//   }
  
//   const result = operate(5, 6, add);
//   console.log(result);
  
// function applyOperation(a, b, operation) {
//     return operation(a, b);
//   }
  
//   function add(a, b) {
//     return a + b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   const result1 = applyOperation(3, 4, add);      // Result: 7
//   const result2 = applyOperation(3, 4, multiply); // Result: 12
// console.log(result1);  
// console.log(result2);

// function Dog(name) {
//     this.name = name;
//   }
  
//   // Adding a method to the Dog prototype
//   Dog.prototype.bark = function() {
//     console.log(this.name + " says woof!");
//   };
  
//   // Creating a Dog object
//   const myDog = new Dog("Buddy");
  
//   // Accessing the inherited method
//   myDog.bark(); // Output: Buddy says woof!

// function outerFunction() {
//     let outerVariable = "I am from the outer function";
  
//     function innerFunction() {
//       console.log(outerVariable);
//     }
  
//     return innerFunction;
//   }
  
//   // Create a closure by calling outerFunction and assigning the result to a variable
//   const clcosure = outerFunction();
  
  
//   // Call the inner function, which still has access to outerVariable
//   closure(); // Output: I am from the outer function

// function performAction(callback) {
//     const data = "Some data";
//     callback(data);
//   }
  
//   performAction(function(result) {
//     console.log(result); // Output: Some data
//   });

// Function that returns a Promise resolving after a specified time
// function promise1(){
// return new Promise((resolve,reject)=>{
//   var a=20;
//   setTimeout(()=>{
//   if(a===20){
//     resolve(a);
//   }else{
//     reject("error");
//   }
// },3000);
  
// })

// }


  
//   async function data(){
//    let name = await promise1();
//    console.log(name);
//   }
//   data();

//   console.log(a);
//   let a = 10;

// function memoizedFunction() {
//   const cache = {};

//   return function (n) {
//     if (n in cache) {
//       console.log('Fetching result from cache for', n);
//       return cache[n];
//     } else {
//       console.log('Calculating result for', n);
//       const result = n * 2;
//       cache[n] = result;
//       return result;
//     }
//   };
// }

// const memoizedMultiplyByTwo = memoizedFunction();

// console.log(memoizedMultiplyByTwo(5)); // Output: Calculating result for 5
// console.log(memoizedMultiplyByTwo(5)); // Output: Fetching result from cache for 5
// console.log(memoizedMultiplyByTwo(8)); // Output: Calculating result for 8
// console.log(memoizedMultiplyByTwo(8)); // Output: Fetching result from cache for 8



// const numbers = [1, 2, 3];
// numbers.forEach(num => console.log(num));
// // Output: 1, 2, 3

// const numbers = [1, 2, 3];
// const squaredNumbers = numbers.map(num => num * num);
// // Result: squaredNumbers is [1, 4, 9]

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum);

// const str = "Hello, World!";
// console.log(str.indexOf("World")); // Output: 7

// var number = 42;
// var str = "The answer is: " + number.toString();
// console.log(str); // Output: The answer is: 42


 
// function sample(a,b){

//   return a+b;


// };



// console.log(sample(parseInt("20"),30));


// let ab = {
//   name: "ihsan",
//   age: 21,
//   c: 20,
 
//   array: [
//       {
//           a: "10",
//           b: 20,
//           c: 30
//       },
//       {
//           a: "10",
//           b: 20,
//           c: 30
//       }
//   ]
// };


// console.log("Original array:", ab.array);


// ab.array[0 ].a = "New Value";
// ab.array[1].a = "New Value";

// console.log("Modified array:", ab.array);


// let arr=[3,5,7,9];

// let a = 'apple , hello, orange'

// var b = a.split("|")

// console.log(b);

// function oparate(a,b,add){

//   return add(a,b);
// }

// function add(a,b){
//     console.log(a+b);
// }
// function multy(){
//     console.log(a*b);
// }

// oparate(10,20,add);
// oparate(10,20,add);


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  

//   Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   };
  

//   const person1 = new Person("John", 25);
  
  
//   person1.greet();
  

// function sayHello(name) {
//     console.log(`cat, ${name}!`);
//   }
  
//   sayHello.call(null,[ "meow","helo"]); // Hello, John!
  
// const originalString = "Hello";
// const paddedStringStart = originalString.slice(2,5);

// console.log(paddedStringStart);
// // Output: "*****Hello"





// var arr = [10, 20, 30];

// var sum = 0;

// var result = arr.reduce( (a, element)=> {
//   console.log(element);
//   return a + element; // Accumulate the elements
// }, sum);

// console.log(result); // Output: 60

// var arr = [101, 20, 30, 40];

// // Find the first element greater than 20 using arrow function
// var a = arr.splice(0,2,500,20000);

// console.log(arr); // Output: 30




 // curring


//   function curryAdd(a) {
//     return function(b) {
//       return function(c) {
//         return a + b + c;
//       };
//     };
//   }





  




// var arr = [1,2,3,4,5];

// var a = arr.reduce((num,sum)=>num+sum,0)

// console.log(a);
















// function sample(b) {
//     console.log(`hi ${this.arr}${this.arr1} ${b}`);
// }



// var a ={
//     name1: "ihsan",
//     age:  21
// ,
//     arr1:[
//        name="ok",
//        age = 20
//     ]
//     ,
//     arr:[
//         name = "yes",
//         age = 25
//     ]
//     ,
//     d :function(z){
//           console.log(` ${z}  ${this.name1}`);
//     }
// }

// a.d("ok");






// // a.arr.name = "good";
// a.arr[0] = "good"
// console.log(a.arr[1] );


// var d = sample.bind(a,["passed","ok"])

// d();

// console.log(parseInt("20")+20+10);





// s()
// console.log(s);

// function s(){

//     console.log("hi");
// }
// var s = function a(){

//     console.log("hok");
// }

// function s(){

//     console.log("hi0");
// }

// function sample(){
// return new Promise((resolve,reject)=>{
//     var a =10;
//     setTimeout(() => {
//         if(a===10){
//             resolve(a)
//         }else{
//             reject("error");
//         }

//     },3000);
// })
// }

// function sample2(){
//     return new Promise((resolve,reject)=>{
//         var b  =20;
//         setTimeout(() => {
//             if(b===20){
//                 resolve(b)
//             }else{
//                 reject("error1");
//             }
    
//         },2000);
//     })
//     }
//     async function z(){
//         console.log(await sample2())
//         console.log("hi");
//     }
//   z();


// Promise.race([sample(),sample2()]).then((a)=>{
//     console.log(a)
//     return "ok"
// })
// .then((z)=>{
//     console.log(z);
// })
// .catch((b)=>{
//     console.log( b);
// })


// var mymap = new Map();

// mymap.set(1,"ihsan")
// mymap.set(2,20)
// mymap.set(3,"ok")

// mymap.forEach((value,key)=>{
//     console.log(`${key} = ${value}`);
// })


// function myFunction() {
//   // Strict mode is applied within this function
  

//   "use strict";
//    var x = 10;
//   console.log(x);
// }

// myFunction();



// // Higher-order function that takes a function and two numbers as arguments
// function applyOperation(operatorFunction, a, b) {
//     return operatorFunction(a, b);
// }

// // Example usage:
// // Define a function to add two numbers
// function add(a, b) {
//     return a + b;
// }
// function multiply(a, b) {
//     return a * b;
// }

// // Use the higher-order function to add two numbers
// const result = applyOperation(multiply, 3, 4);





 var a =[10,2,4,5,3,7,12] ;

var b = a.filter((value)=>value%2===0);

console.log(b);