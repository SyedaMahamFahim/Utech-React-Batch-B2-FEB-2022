// Syntax


// let myPromise = new Promise(function (myResolve, myReject) {
//     // "Producing Code" (May take some time)

//     myResolve(); // when successful
//     myReject();  // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//     function (value) { /* code if successful */ },
//     function (error) { /* code if some error */ }
// );

// Example One 
// function myDisplayer(some) {
//      console.log(some);
// }

//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 4;
  
//   // some code (try to change x to 5)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );
  

//   then === promise fullfil 
//  Catch == reject 

// Example Two
const fetchPromise=fetch('https://jsonplaceholder.typicode.com/users')

console.log(fetchPromise)
fetchPromise.then(response=>{
    return response.json();
}).then(users=>{
        console.log("data from promise",users)
        getUserData(users)

}).catch(err=> console.log("this is error",err))



function getUserData(users){
    console.log("data from getUserData function",users[0].id)
}

// Spread
// foreach