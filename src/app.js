/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const suites = ["♥", "♠", "♣", "♦"];
  const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];

  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }
  let suite = suites[randomCard(suites)];

  let values = cardValues[randomCard(cardValues)];

  let middlesuite = document.querySelector(".icon-middle");
  middlesuite.innerHTML = values;

  let topsuite = document.querySelector(".icon-top");
  topsuite.innerHTML = suite;
  if (suite === "♥" || suite === "♦") {
    topsuite.style.color = "red";
  }
  let bottomsuite = document.querySelector(".icon-bottom");
  bottomsuite.innerHTML = suite;
  if (suite === "♥" || suite === "♦") {
    bottomsuite.style.color = "red";
  }
};
