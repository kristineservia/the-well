import { cards } from "./data.js";

export function renderHomeView() {
  const homeView = document.querySelector("#gallery__home-view");

  //Find the template via document.querySelector & connect it to a variable -STEP 1
  const template = document.querySelector("#gallery__card-template");

  //Target the container where all the cards are added into -STEP 2
  const cardsContainer = document.querySelector(".gallery__cards");

  //Clear any previously rendered cards (no duplicate card sets upon refresh)
  cardsContainer.innerHTML = "";

  //Add a forEach Loop to the cards object to create and display multiple cards -STEP 3
  cards.forEach((card) => {
    //Assign a variable to the template content, and CLONE IT to make a "REAL HTML ELEMENT" -STEP 4
    const cardEl = template.content
      .querySelector(".gallery__card")
      .cloneNode(true);

    //Find the elements inside the cloned cardEl to display on each card -STEP 5
    const keywordEl = cardEl.querySelector(".gallery__card-keyword");
    const referenceEl = cardEl.querySelector(".gallery__card-verse-location");
    const verseEl = cardEl.querySelector(".gallery__card-verse");
    const flipButtons = cardEl.querySelectorAll(".gallery__card-flip-btn");

    //Give these elements values -STEP 6
    keywordEl.textContent = card.word;
    referenceEl.textContent = card.verseLocation;
    verseEl.textContent = card.verse;

    //Flip Button Functionality -STEP 7
    flipButtons.forEach((button) => {
      button.addEventListener("click", () => {
        cardEl.classList.toggle("gallery__card_flipped");
      });
    });

    //Add each card to the cardContainer to display on the Webpage -STEP 8
    cardsContainer.append(cardEl);
  });
}

// TYJ!
