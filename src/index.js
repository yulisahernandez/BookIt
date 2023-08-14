import { hotelsFiltered, filterHotelsByDates } from "./components/filter/filter.js";
import { rendercards } from "./components/cards/card.js";

// Obtén las referencias a los elementos de entrada y botón del DOM
const countriesInput = document.getElementById("countriesInpunt");
const pricesInput = document.getElementById("pricesInpunt");
const checkinInput = document.getElementById("chekinInpunt");
const checkoutInput = document.getElementById("checkoutInpunt");
const clearButton = document.querySelector(".filtersBox__btn");
const hotelsContainer = document.getElementById("hotelsSection");

// Función para actualizar las tarjetas de hoteles con los hoteles filtrados
async function updateHotelCards() {
  // Filtra los hoteles basados en los valores de los filtros
  const filteredHotels = await hotelsFiltered();

  // Limpia las tarjetas anteriores
  hotelsContainer.innerHTML = "";

  // Renderiza las nuevas tarjetas de hoteles filtrados
  rendercards(filteredHotels);
}

// Agrega un evento de cambio a los elementos de entrada para aplicar el filtrado al cambiar
countriesInput.addEventListener("change", updateHotelCards);
pricesInput.addEventListener("change", updateHotelCards);
checkinInput.addEventListener("change", filterHotelsByDates);
checkoutInput.addEventListener("change", filterHotelsByDates);

// Agrega un evento al botón de limpiar para restablecer los filtros y mostrar todos los hoteles
clearButton.addEventListener("click", async () => {
  countriesInput.value = "all";
  pricesInput.value = "";
  checkinInput.value = "";
  checkoutInput.value = "";
  
  // Actualiza las tarjetas para mostrar todos los hoteles
  await updateHotelCards();
});

// Llama a la función para mostrar todos los hoteles al cargar la página
updateHotelCards();
