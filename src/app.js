/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const suites = ["♥", "♠", "♣", "♦"];

  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }
  let suite = suites[randomCard(suites)];
  console.log(suite);

  let topsuite = document.querySelector(".icon-top");
  topsuite.innerHTML = suite;

  let bottomsuite = document.querySelector(".icon-bottom");
  bottomsuite.innerHTML = suite;
};
