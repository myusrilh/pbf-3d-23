// IF YOU TYPE...                                     
console.log(helloDeclaration());                      
    function helloDeclaration() {                                  
       return "Hello from a function declaration";         
       }                                                       
    console.log(helloDeclaration());                      
                                             
    console.log(helloExpression());                       
    var helloExpression = function() {                    
      return "Hello from a function expression";              
    }                                                     
    console.log(helloExpression());
    
// JAVASCRIPT DOES THE FOLLOWING (DUE TO HOISTING)
// function helloDeclaration() { 
//     return "Hello from a function declaration";
// }

// var helloExpression;
// console.log(helloDeclaration());

// // helloDeclaration function is hoisted
// console.log(helloDeclaration());
// // Can't call function expression before its defined
// // Raises TypeError: helloExpression is not a function
// console.log(helloExpression());
// helloExpression = function() {    
//     return "Hello from a function expression";
// }

// console.log(helloExpression());