import { requestHotelData } from "../../utils/request.js";

const pricesInpunt = document.getElementById("pricesInpunt");



const hotelsData = await requestHotelData();

export const hotelsFilterPrice = async () => {

  const filteredHotels = hotelsData.filter((element) => {
    if (pricesInpunt.value !== "all" && element.price !== pricesInpunt.value.length) {
      return false;
    }


    return true;
  }); return filteredHotels
};

// todo filtro fechas


export const filterHotelsDates = (checkinInpunt, checkoutInpunt) => {
  if (!checkinInpunt || !checkoutInpunt) {
    // Si no hay fechas de check-in y check-out seleccionadas, retornar todos los hoteles.
    return hotelsData;
  }

  const fechaHoy = new Date().setHours(0, 0, 0, 0);

  const dateDefault = (date) => {
    return date == false ? fechaHoy : date;
  }

  const dateCheckIn = new Date(dateDefault(checkinInpunt));
  const dateCheckInLocal = new Date(
    dateCheckIn.getTime() + dateCheckIn.getTimezoneOffset() * 60000
  );
  const dateCheckOut = new Date(dateDefault(checkoutInpunt));
  const dateCheckOutLocal = new Date(
    dateCheckOut.getTime() + dateCheckOut.getTimezoneOffset() * 60000
  );

  const filterDate = hotelsData.filter(({ availabilityFrom, availabilityTo }) => {
    const availabilityHoltes = fechaHoy + availabilityFrom;
    const availabilityDays = availabilityHoltes + availabilityTo;
    return (
      dateCheckInLocal.getTime() >= availabilityHoltes &&
      dateCheckOutLocal.getTime() <= availabilityDays
    );
  });

  return filterDate;
};


export const hotelsFiltered = async (checkinInpunt, checkoutInpunt) => {


  const filterPrice = hotelsFilterPrice()

  const filteredByDates = filterHotelsDates(checkinInpunt, checkoutInpunt);
  console.log('dates', filteredByDates), console.log('prices', filterPrice);
  return filteredByDates && filterPrice
};