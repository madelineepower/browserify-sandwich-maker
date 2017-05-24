"use strict";

let SandwichMaker = require('./SandwichMaker');
var finalCheesePrice = 0;
var CheeseChoice = "";
var cheesePrices = {"American": 1.50, "Provolone": 1.75, "Swiss": 1.80, "Cheddar": 1.90, "No Cheese": 0.00};

function addCheese(value) {
    var userCheeseInput = value;
    console.log("userCheeseinput", userCheeseInput);
    var prop;
      for (prop in cheesePrices) {
          if(userCheeseInput.toLowerCase() === prop.toLowerCase()) {
                  finalCheesePrice += cheesePrices[prop];
                  CheeseChoice = prop;
                  SandwichMaker.addTopping(finalCheesePrice);
                  SandwichMaker.showToppings(CheeseChoice);
              }
           }
        }
module.exports = {addCheese};
