// // Define a function with three parameters:
function myBio(firstName, lastName, company) {
    return console.log(`${firstName.id} ${lastName.fullname}`);
}

// // here (should)
// // Ali = firstname
// // Khan=lastName
// // UTECH =company

// const userProfile=[
//         {
//             id:1,
//             fullname:"Ayesha Khan",
//             grade:7,
//         },
//         {
//             id:2,
//             fullname:"Ameen Khan",
//             grade:7,
//         },
// ];

// console.log("main array",userProfile)
// console.log("spread operators",...userProfile)
// myBio(...userProfile);
// const userProfile=["Ali", "Khan", "Utech"]
// console.log(...userProfile)
// myBio(["Ali", "Khan", "Utech"]);
// here (should)
// Ali = firstname
// Khan=lastName
// UTECH =company

// myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);

     // The invocation above will return:
    //   “Oluwatobi Sofela runs CodeSweetly”


let arr1=[1,2,3,4,5]
let arr2 =[5,6,7,8]

console.log("this is arr1: ", arr1)
console.log("this is arr2: ", arr2)
// let bothArray=arr1.concat(arr2)
let bothArray=[...arr1,...arr2]
console.log("combineArray",bothArray)