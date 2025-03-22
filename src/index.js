function updateTime() {
  // New York
  let newyorkElement = document.querySelector("#newyork");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTime = moment().tz("America/New_York");

    newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
    newyorkTimeElement.innerHTML = `
      <span class="clock">${newyorkTime.format("h:mm:ss")}</span>
      <small>${newyorkTime.format("A")}</small>
    `;
  }

  // London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = `
      <span class="clock">${londonTime.format("h:mm:ss")}</span>
      <small>${londonTime.format("A")}</small>
    `;
  }

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = `
      <span class="clock">${tokyoTime.format("h:mm:ss")}</span>
      <small>${tokyoTime.format("A")}</small>
    `;
  }

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = `
      <span class="clock">${sydneyTime.format("h:mm:ss")}</span>
      <small>${sydneyTime.format("A")}</small>
    `;
  }
}

let selectedCityTimeZone = null;

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  selectedCityTimeZone = cityTimeZone;

  updateSelectedCityTime();
}

function updateSelectedCityTime() {
  if (!selectedCityTimeZone) return;

  let cityName = selectedCityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(selectedCityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city">
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      <div class="time">
        <span class="clock">${cityTime.format("h:mm:ss")}</span>
        <small>${cityTime.format("A")}</small>
      </div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);
setInterval(updateSelectedCityTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
