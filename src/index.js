import {rendercards} from "./components/cards/card.js";
import { hotelsFiltered } from "./components/filter/filter.js";


const cards = async () => {
    const hotels = await hotelsFiltered();
    rendercards(hotels);
}

cards();




//const countriesInpunt = document.getElementById("countriesInpunt");
// countriesInpunt.addEventListener "change", (()=>{
    //console.log(countriesInpunt.value);
// })