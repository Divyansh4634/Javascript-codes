// "use Strict";// treat all js as newer version
//alert(3+3) --> w're using node js not browser
// console.log(3+3); console.log("Naitik")// don't write code like this readability mst ho
// console.log(3+3);
// z="Naitik";
// console.log(typeof(z));
// console.log(+"");
 


/* Js is Dynamically typed language*/
//Datatypes are of two types 1. primitive ; 2. non primitive;
//difference..?

// Primitive: 7 categories
/*
String, Number, null, Boolean, Undefined, Symbol, Bigint
*/



/*Primitive Datatypes */

//number=> 2^53-1;//range
// const bignNumber = 6663554635645654654656444432743765357634756786848235438756345623475623764768443// n nhi h to number
// console.log(typeof bignNumber);

//string:
// const myString = "Hello Naitik!";
// console.log(typeof myString); 

// Boolean:True or False
// console.log("2"==2);

// null: it means empty either 0 or anything;
// const csk=null;
// console.log(typeof csk);

// undefined
//undefined: as null
// console.log(undefined==0);
// console.log(undefined<0);
// console.log(undefined>0);

// Symbol=> uniqueness; even after same data stored it gives false
// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === anotherId); // Output: false bcz of different memory references

// bigint
// const bignNumber = 6663554635645654654656444432743765357634756786848235438756345623475623764768443n
// console.log(typeof bignNumber);





// Non-primitive(reference type):
/*
{objects or web events}.js Completed 
Arrays,objects,functions;
*/


// Array:

// const hero = ["shaktimaan", "bulla", "pappupele"];
// console.log(hero); 


//objects:

// const hero=["shaktimaan","bulla","pappupele"];
// let my_obj = {
//     name:"Naitik",
//     age:18,
// }
// console.log(typeof hero);


// function:

// const my_function= function(){
//     console.log("! Hello World");
// };
// console.log(typeof my_function)