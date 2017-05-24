"use strict";
let SandwichMaker = require('./SandwichMaker');
var finalCondimentPrice = 0;
var CondimentChoice = "";
var condimentPrices = {"Mayo": 1.50, "Ranch": 1.75, "Siracha Mayo": 1.80, "Mustard": 1.50, "No Condiments": 0.00};

function addCondiment(value) {
          var userCondimentInput = value;
          console.log("userCondimentInput", userCondimentInput);
          var prop;
            for (prop in condimentPrices) {
                if(userCondimentInput.toLowerCase() === prop.toLowerCase()) {
                  finalCondimentPrice += condimentPrices[prop];
                  CondimentChoice = prop;
                  SandwichMaker.addTopping(finalCondimentPrice);
                  SandwichMaker.showToppings(CondimentChoice);
              }
           }
        }

module.exports = {addCondiment};
