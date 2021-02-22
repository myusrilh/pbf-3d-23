// Contents of amazing.js
// var amazingNS = {};
// (function() {
//   var privateRender = function() {  console.log("Hello from amazingNS.render()!") };
//   this.render = function() { privateRender() };
// }).call(amazingNS);

// listing 1-16 (pakai localhost)
// export let render = function () {
//   console.log("Hello from amazing.render()!");
// }

// listing 1-17 (pakai localhost)
const vowels = ['a','e','i','o','u']; 

let render = function () {
           console.log("Hello from amazing.render()!");
}

function testing() {                                
  console.log("testing() in amazing.js");  
  
}

export {vowels,render,testing};
