var Child = require("./sally-demo/child.js");

var sally = new Child({name: "sally", age: 12});

sally.hasEnergy(); //=> true
console.log("//=> sally has energy at first:", sally.hasEnergy() === true);

sally.jump();      //=> true
sally.hasEnergy(); //=> true
sally.jump();      //=> false
console.log("//=> sally refuses to jump when she is tired:", sally.jump() === false);

sally.takeNap();   //=> true
sally.hasEnergy(); //=> true
console.log("//=> sally has energy after a nap:", sally.hasEnergy() === true);

