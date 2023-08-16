import { rendercards } from "./components/cards/card.js";
import { hotelsFiltered } from "./components/filter/filter.js";



const countriesInpunt = document.getElementById("countriesInpunt");
const checkinInpunt = document.getElementById("chekinInpunt");
const checkoutInpunt = document.getElementById("checkoutInpunt");
const pricesInpunt = document.getElementById("pricesInpunt");

const cards = async () => {
  const hotelsContainer = document.getElementById("hotelsSection");

  while (hotelsContainer.firstChild) {
    hotelsContainer.removeChild(hotelsContainer.firstChild);
  }

  const filteredByDates = await hotelsFiltered(checkinInpunt.value, checkoutInpunt.value);
  rendercards(filteredByDates);
};

cards();



countriesInpunt.addEventListener("change", cards);
pricesInpunt.addEventListener("change", cards);
checkinInpunt.addEventListener("change", cards);
checkoutInpunt.addEventListener("change", cards);
