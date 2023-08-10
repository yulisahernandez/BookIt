import {requestHotelData} from "../../utils/request.js";

const countriesInpunt = document.getElementById("countriesInpunt");
const chekinInpunt = document.getElementById("chekinInpunt");
const checkoutInpunt = document.getElementById(" checkoutInpunt");
const pricesInpunt = document.getElementById("pricesInpunt");
const sizesInpunt= document.getElementById("sizesInpunt");

export const hotelsFiltered = async() =>{
    const hotelsData = await requestHotelData(); 
    return hotelsData.filter((element)=>{
        if(countriesInpunt.value != "all"){
            return element.country === countriesInpunt.value
        }else{
            return element
        }
    });
}

/*}).filter(()=>{
    //checrIn
}).filter(()=>{
    //prices
}).filter(()=>{
    //sizes
});*/