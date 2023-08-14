import { requestHotelData } from "../../utils/request.js";

const countriesInpunt = document.getElementById("countriesInpunt");
const checkinInpunt = document.getElementById("chekinInpunt");
const checkoutInpunt = document.getElementById("checkoutInpunt");
const pricesInpunt = document.getElementById("pricesInpunt");

export const hotelsFiltered = async () => {
    const hotelsData = await requestHotelData();
  
    const filteredHotels = hotelsData.filter((element) => {
      if (countriesInpunt.value !== "all" && element.country !== countriesInpunt.value) {
        return false;
      }
      if (pricesInpunt.value !== "" && element.price !== pricesInpunt.value.length) {
        return false;
      }
      // Puedes agregar más condiciones de filtrado aquí si es necesario (chequeo de fechas, tamaño, etc.).
      
      return true;
    });
  
    return filteredHotels;
  };
  
