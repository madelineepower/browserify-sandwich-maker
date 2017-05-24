"use strict";



  // Private variable to store the price
  var totalPrice = 0;
  var finalSandwich = [];
  var finalSandwichDiv = document.getElementById("finalSandwich");



function addTopping(toppingPrice) {
              totalPrice += toppingPrice;
              console.log(totalPrice);
              finalSandwichDiv.innerHTML = `<h4>Order Total:</h4><p>$${totalPrice.toFixed(2)}</p>`;
      }
function showToppings(toppingChoices) {
            finalSandwich.push(toppingChoices);
            console.log("finalSandwich", finalSandwich);
            finalSandwichDiv.innerHTML += `<h4>Your Sandwich has:</h4><p>${finalSandwich}</p>`;

      }

module.exports = {
  addTopping,
  showToppings
};
