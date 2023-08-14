import { requestHotelData } from "../../utils/request.js";
import { rendercards } from "../cards/card.js";


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
  


  export function filterHotelsByDates() {
    const dateIn = document.getElementById("chekinInpunt").value;
    const dateOut = document.getElementById("checkoutInpunt").value;
    const existDates = dateIn && dateOut;
    const fechaHoy = new Date().setHours(0, 0, 0, 0);
  
    function dateDefault(date) {
      return date == false ? fechaHoy : date;
    }
  
    const dateCheckIn = new Date(dateDefault(dateIn));
    const dateCheckInLocal = new Date(
      dateCheckIn.getTime() + dateCheckIn.getTimezoneOffset() * 60000
    );
    const dateCheckOut = new Date(dateDefault(dateOut));
    const dateCheckOutLocal = new Date(
      dateCheckOut.getTime() + dateCheckOut.getTimezoneOffset() * 60000
    );
  
    const filteredHotels = hotelsFiltered().filter(({ availabilityFrom, availabilityTo }) => {
      const availabilityHoltes = fechaHoy + availabilityFrom;
  
      const availabilityDays = availabilityHoltes + availabilityTo;
      return (
        dateCheckInLocal.getTime() >= availabilityHoltes &&
        dateCheckOutLocal.getTime() <= availabilityDays
      );
    });
  
    if (filteredHotels.length > 0) {
      rendercards(filteredHotels);
    } else {
      document.querySelector(".main").innerHTML =
        "We're sorry, there are no hotels available on these dates";
    }
  }