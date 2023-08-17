const cardContainer = document.getElementById("hotelsSection")

export const rendercards = (hotels) => {
    const selectFlag = (countryName) => {
        switch (countryName) {
            case "Argentina":
                return "./src/assets/Flags/argentina.svg"
                break;
            case "Chile":
                return "./src/assets/Flags/chile.svg"
                break;
            case "Brasil":
                return "./src/assets/Flags/brasil.svg"
                break;
            case "Uruguay":
                return "./src/assets/Flags/uruguay.svg"
                break;
            default:
                break;
        }

    }
    const selectPrice = (value) => {
        switch (value) {
            case 1:
                return "$"
                break;
            case 2:
                return "$$"
                break;
            case 3:
                return "$$$"
                break;
            case 4:
                return "$$$$"
                break;
            default:
                break;
        }
    }
    hotels.forEach((element) => {
        const cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card")
        cardDiv.style.backgroundImage = `url("${element.photo}")`;
        cardDiv.innerHTML = `
                <h3 class="card__title">${element.name}</h3>
                <div class="card__box"> 
                    <img class="card__flag" src="${selectFlag(element.country)}" alt="Flag of ${element.country}">
                    <p class="card__country">${element.country}</p>
                    <p class="card__roomsandprice">${element.rooms} rooms - <span> ${selectPrice(element.price)}</span></p>
                </div>
                <button class="card__btn" id="clearFiltersBtn">Book it!</button> 
        `;
        cardContainer.appendChild(cardDiv);
    });
}