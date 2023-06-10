/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // console.log("Hello from the console!");

  const suites = ["♥", "♠", "♣", "♦"];

  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }
  let suite = suites[randomCard(suites)];
  console.log(suite);

  let topsuite = document.querySelector("suit-top");
  topsuite.innerHTML = suite;

  let bottomsuite = document.querySelector("suit-bottom");
  bottomsuite.innerHTML = suite;
};
