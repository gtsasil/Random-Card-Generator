/* eslint-disable */
import "./style.css";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numberCards = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexNumber = Math.floor(Math.random() * numberCards.length);

  return numberCards[indexNumber];
};

let generateRandomSuit = () => {
  let suitElements = ["diamond", "heart", "spade", "club"];

  let indexSuit = Math.floor(Math.random() * suitElements.length);
  return suitElements[indexSuit];
};
