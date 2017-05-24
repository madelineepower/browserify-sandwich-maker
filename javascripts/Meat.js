"use strict";
let SandwichMaker = require('./SandwichMaker');
var finalMeatPrice = 0;
var MeatChoice = "";
var meatPrices = {"Turkey": 1.50, "Bacon": 1.70, "Salami": 1.80, "Ham": 1.80, "Pepperoni": 1.75, "No Meat": 0.00};


function addMeat(value) {
          var userMeatInput = value;
          console.log("userMeatinput", userMeatInput);
          var prop;
            for (prop in meatPrices) {
                if(userMeatInput.toLowerCase() === prop.toLowerCase()) {
                  finalMeatPrice += meatPrices[prop];
                  MeatChoice = prop;
                  SandwichMaker.addTopping(finalMeatPrice);
                  SandwichMaker.showToppings(MeatChoice);
              }
           }
        }

module.exports = {addMeat};
