import {rendercards} from "./components/cards/card.js";
import { hotelsFiltered } from "./components/filter/filter.js";

const cards = async () => {
  const hotelsContainer = document.getElementById("hotelsSection");
  
  // Elimina las tarjetas anteriores.
  while (hotelsContainer.firstChild) {
    hotelsContainer.removeChild(hotelsContainer.firstChild);
  }
  
  const hotels = await hotelsFiltered();
  rendercards(hotels);
};

// Llama a la función 'cards' una vez al inicio para mostrar todos los hoteles.
cards();

// Agrega eventos de escucha para los filtros.
countriesInpunt.addEventListener("change", cards);
pricesInpunt.addEventListener("change", cards);
// También puedes agregar eventos de escucha para otros filtros aquí si es necesario.

// ...


  






