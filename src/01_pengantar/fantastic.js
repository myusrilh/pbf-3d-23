// Contents of fantastic.js
// var fantasticNS = {};

// (function(namespace) { 
//     namespace.render = function() { console.log("Hello from fantasticNS.render()!") };
// })(fantasticNS);

// listing 1-16 (pakai localhost)
// export let render = function() {
//     console.log("Hello from fantastic.render()!")
// }

// listing 1-17 (pakai localhost)
export let render = function() {
    console.log("Hello from fantastic.render()!")
}

let main = function() { 
 console.log("main() in fantastic"); 
}

export default main;
