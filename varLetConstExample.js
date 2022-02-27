// Var:
// 	hoisted (always declared at top of scope, global if none)
// 	function scope
//  redeclarable

// Let:
//  block scope
//  updatable
// 	not redeclarable

// const: 
// 	block scope
// 	not reassignable
// 	not redeclarable

// global 
// Local

 /////////////////// Var///////////////////////
// function varFunc(){
//     var newHello="this is function var"
//     return newHello
// }
// console.log(newHello)
// console.log(varFunc())

// var tester="Hey World" //declare 

// tester="Updatedter  Tesvalue" // Update

// var tester= "Redeclare value of tester" // Reclare 
// tester="Redeclare Updated Tester value" // Update
// console.log(tester)


/////////////////// Let///////////////////////

// let userName="Ayesha";
// console.log(userName)

// userName="Ayesha Khan"
// console.log(userName)     // Let === update

// let userName="Ali";
// console.log(userName)

// let userName="Ayesha";
// let index =4;

// // Block scope
// if(index >3){
//     let hello="Hello World"
//     console.log(hello)
// }

// console.log(hello)

/////////////////// Const ///////////////////////

// cant reclare
// cant  update 

const userName="Ayesha";

// userName="updated ayesha"  // update

const userName="Relcare Ayesha"
console.log(userName)


//By Simrah 
// var can be updated and redeclared without any error
// let can be updated without error but not redeclared
// const can not be updated and redeclared
