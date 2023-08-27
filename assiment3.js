"use strict";
var cart = ['dress', "sandle", "t shirt"];
cart.splice(cart.length / 2, 1, "slipper");
console.log(cart);
var add = ['dress', "sandle ", 'slipper'];
add.splice(add.length / 2, 0, "tshirt");
console.log(add);
// Write a program that uses a while loop to print the first 25 integers.
var index = 0;
console.log("before loop");
while (index <= 10) {
    var num = index * 25;
    console.log("25 *", +index + "=" + num);
    index = index + 1;
}
console.log("after loop");
//Write a program that uses a while loop to print the first 10 even numbers.
var index = 0;
while (index <= 10) {
    var num = index * 2;
    console.log("2 *", +index + "=" + num);
    index = index + 1;
}
//Write a program having an array of numbers if the number is negative it should remove the negative number 
//from the array.
var num1 = [-10, 8, 9, -5];
