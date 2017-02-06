var Toaster = require("./toast-demo/toaster.js");

var brave = new Toaster();
brave.slots //=> 1

var wonder = {toast: function noop(){}};
brave.push(wonder);
brave.toast(3); //=> true
brave.pop(); //=> wonder
wonder.color() //=> "brown"
