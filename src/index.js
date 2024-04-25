function updateTime() {

    let newYorkElement = document.querySelector("#new-york");
    if (newYorkElement) {
        let newYorkDateElement = newYorkElement.querySelector(".date");
        let newYorkTimeElement = newYorkElement.querySelector(".time");
        let newYorkTime = moment().tz("America/New_York");
        newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
        newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss  [<small>]A[</small>]");
    }

    let melbourneElement = document.querySelector("#melbourne");
    if (melbourneElement) {
        let melbourneDateElement = melbourneElement.querySelector(".date");
        let melbourneTimeElement = melbourneElement.querySelector(".time");
        let melbourneTime = moment().tz("Australia/Melbourne");
        melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
        melbourneTimeElement.innerHTML = melbourneTime.format("h:mm:ss  [<small>]A[</small>]");
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.split("/")[1].replace("_", " ");
    let cityFlag = event.target.options[event.target.selectedIndex].dataset.flag;
    console.log(cityFlag)
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#time-zone");
    citiesElement.innerHTML = `
            <div class="city-name">
              <div class="left-side">
                <div class="city-flag">
                ${cityName}
                  <img
                    src="${cityFlag}"
                    alt="${cityName} Flag"
                    class="country-flag"
                  />
                </div>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
              </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
        "A"
    )}</small></div>
            </div>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-name");
citiesSelectElement.addEventListener("change", updateCity)