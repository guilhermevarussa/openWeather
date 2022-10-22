const apiKey = '9f2c82ad3ca711c185c0c9930579e05d';
const apiCountryURL = 'https://countryflagsapi.com/png/';

const cityImput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');
const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const countryElement = document.querySelector('#country');
const umidityElement = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind span');

const wheatherContainer = document.querySelector('#weather-data');



//*Functions

const getWeatherData = async (city) => {


    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=en`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    console.log(data);

    return data;

};

const showDataWeahter = async (city) => {
    const data = await getWeatherData(city)
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute('src', apiCountryURL + data.sys.country);
    umidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;


    wheatherContainer.classList.remove("hide");

};


//*Events
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const city = cityImput.value

    showDataWeahter(city)
});

cityImput.addEventListener('keyup', (e) => {

    if (e.code === "Enter") {
        const city = e.target.value

        showDataWeahter(city)
    };

});
