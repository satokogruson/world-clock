function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDateElement = melbourneElement.querySelector(".date");
    let melbourneTimeElement = melbourneElement.querySelector(".time");
    let melbourneTime = moment().tz("Australia/Melbourne");
    melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
    melbourneTimeElement.innerHTML = melbourneTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneContainer = document.querySelector("#time-zone-2"); 
  melbourneContainer.style.display = "none";

  if (cityTimeZone === "current" || cityTimeZone === "") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.split("/")[1].replace("_", " ");

  let cityFlag;
  if (cityTimeZone === moment.tz.guess() || cityTimeZone === "current") {
    let countryCode = cityTimeZone.split('/')[0].toLowerCase(); 
    cityFlag = `https://flagcdn.com/28x21/${countryCode.substring(0, 2)}.png`;
  } else {
    cityFlag = event.target.options[event.target.selectedIndex].dataset.flag;
  }

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#time-zone");
  citiesElement.innerHTML = createCityBlock(cityTimeZone, cityName, cityFlag, cityTime);
}

function createCityBlock(cityTimeZone, cityName, cityFlag, cityTime) {
  return `
        <div class="city-name">
            <div class="left-side">
                <div class="city-flag">
                    ${cityName}
                    <img src="${cityFlag}" alt="${cityName} Flag" class="country-flag"/>
                </div>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
    `;
}




updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-name");
citiesSelectElement.addEventListener("change", updateCity);

