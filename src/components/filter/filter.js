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

export const filterHotelsDates = (hotelsData, checkinInpunt, checkoutInpunt) => {
  const existDates = checkinInpunt && checkoutInpunt;
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
  const hotelsData = await requestHotelData();




  const filterPrice = await hotelsFilterPrice()

  const filteredByDates = filterHotelsDates(hotelsData, checkinInpunt, checkoutInpunt);
  return filteredByDates && filterPrice;
};