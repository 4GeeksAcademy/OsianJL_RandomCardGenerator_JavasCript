/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const cardNum = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const cardSym = ["♦", "♥", "♠", "♣"];

  let numAleatorio = Math.floor(Math.random() * cardNum.length);
  let cardAleatorio = Math.floor(Math.random() * cardSym.length);

  let cardSimbolUp = document.getElementById("up-cardSymbol");
  let cardSimbolDown = document.getElementById("down-cardSymbol");
  let cardNumber = document.getElementById("cardNumber");

  if (cardSym[cardAleatorio] == "♥" || cardSym[cardAleatorio] == "♦") {
    cardSimbolDown.setAttribute("style", "color: red");
    cardSimbolUp.setAttribute("style", "color: red");
  }

  cardNumber.innerHTML = cardNum[numAleatorio];
  cardSimbolUp.innerHTML = cardSym[cardAleatorio];
  cardSimbolDown.innerHTML = cardSym[cardAleatorio];
};
