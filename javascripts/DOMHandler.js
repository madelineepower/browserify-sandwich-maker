"use strict";
console.log("hi dom");

let SandwichMaker = require('./SandwichMaker'),
    bread = require('./Bread'),
    meat = require('./Meat'),
    cheese = require('./Cheese'),
    veggie = require('./Veggies'),
    condiment = require('./Condiments');

var finalSandwichPrice = 0;
var selectedTopping;

//////////////  BREAD   //////////////////////////////////
var breadChooser = document.getElementById("breadChoice");
breadChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    bread.addBread(selectedTopping);
});

//////////////  MEAT  //////////////////////////////////
var meatChooser = document.getElementById("meatChoice");
meatChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    meat.addMeat(selectedTopping);
});

//////////////  CHEESE   //////////////////////////////////
var cheeseChooser = document.getElementById("cheeseChoice");
cheeseChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    cheese.addCheese(selectedTopping);
});

//////////////  VEGGIE   //////////////////////////////////
var veggieChooser = document.getElementById("veggieChoice");
veggieChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    veggie.addVeggie(selectedTopping);
});

//////////////  CONDIMENT   //////////////////////////////////
var condimentChooser = document.getElementById("condimentChoice");
condimentChooser.addEventListener("change", function(event) {
    selectedTopping = this.value;
    condiment.addCondiment(selectedTopping);
});
