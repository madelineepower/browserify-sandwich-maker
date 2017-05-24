"use strict";

let SandwichMaker = require('./SandwichMaker');
var finalBreadPrice = 0;
var BreadChoice = [];
var breadPrices = {"White": 1.50, "Wheat": 3.50, "Gluten Free": 5.00, "No Bread": 0.00};

function addBread(value) {
    var userBreadInput = value;
    console.log("userinput", userBreadInput);
    var prop;
      for (prop in breadPrices) {
          if(userBreadInput.toLowerCase() === prop.toLowerCase()) {
              finalBreadPrice += breadPrices[prop];
              BreadChoice = prop;
              SandwichMaker.addTopping(finalBreadPrice);
              SandwichMaker.showToppings(BreadChoice);
            }
          }
        }

module.exports = {addBread};
