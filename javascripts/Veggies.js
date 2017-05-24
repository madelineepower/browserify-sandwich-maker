"use strict";
let SandwichMaker = require('./SandwichMaker');
var finalVeggiePrice = 0;
var VeggieChoice = "";
var veggiePrices = {"Lettuce": 1.50, "Tomato": 1.75, "Onion": 1.80, "Peppers": 1.90, "Pickles": 1.00, "No Veggies": 0.00};


function addVeggie(value) {
          var userVeggieInput = value;
          console.log("userVeggieinput", userVeggieInput);
          var prop;
            for (prop in veggiePrices) {
                if(userVeggieInput.toLowerCase() === prop.toLowerCase()) {
                  finalVeggiePrice += veggiePrices[prop];
                  VeggieChoice = prop;
                  SandwichMaker.addTopping(finalVeggiePrice);
                  SandwichMaker.showToppings(VeggieChoice);
              }
           }
        }

module.exports = {addVeggie};
