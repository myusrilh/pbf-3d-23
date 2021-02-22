// THIS IS VALID WITH var...                          

// var number = 1;                                       

// // 500 lines later                                    

// // var with same name redeclared is valid             
// var number = 2;                                       


// var echoer = function(message) {                      
//   // var with argument name is valid                    
//   // gets overwritten                                   
//  var message = "Local message";                         
//   console.log(message);                                     
//   return message;                                           
// }                                                      

// echoer("Hello there!");

// THIS IS INVALID WITH let
let number = 1;

// 500 lines later
// let with same name redeclared is an error
let number = 2; // Duplicate declaration "number"

let echoer = function(message) {
    // Reusing function argument name as let is an error
    // Duplicate declaration "message"
    let message = "Local message"; 
    console.log(message);
    return message;
}

echoer("Hello there!");