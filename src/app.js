/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const suites = ["♥", "♠", "♣", "♦"];
  const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let suite; // Declare the suite variable outside the updateCard function

  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function updateCard() {
    let previousSuite = suite; // Store the previous suite value
    suite = suites[randomCard(suites)];
    let values = cardValues[randomCard(cardValues)];

    let middlesuite = document.querySelector(".icon-middle"); //middle suite
    middlesuite.innerHTML = values;

    let topsuite = document.querySelector(".icon-top"); //icon-top
    topsuite.innerHTML = suite;
    if (suite === "♥" || suite === "♦") {
      topsuite.style.color = "red";
    } else if (previousSuite === "♥" || previousSuite === "♦") {
      // Check the previous suite value
      topsuite.style.color = "";
    }
    let bottomsuite = document.querySelector(".icon-bottom"); //icon-bottom
    bottomsuite.innerHTML = suite;
    if (suite === "♥" || suite === "♦") {
      bottomsuite.style.color = "red";
    } else if (previousSuite === "♥" || previousSuite === "♦") {
      // Check the previous suite value
      bottomsuite.style.color = "";
    }
  }
  updateCard();
  setInterval(updateCard, 2000);
};
