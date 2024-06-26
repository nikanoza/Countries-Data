'use strict';

const countriesContainer = document.querySelector('.grid-container');
const searchCountry = document.querySelector('.search-icon');
const userInput = document.querySelector('.search-text');
const filterByContinent = document.querySelector('.continent-container');
const countriesData = document.querySelector('.countries-data');
const continent = document.querySelectorAll('.filter-countries');
const choice = document.querySelector('.filter-countries-choose');
///
const selected = document.querySelector('.selected');
const menuOptions = document.querySelector('.menu');
const continentOption = document.querySelectorAll('.option');
const containerMode = document.querySelector('.mode-container');
/***************************************************/
/**************************************************/
/*************************************************/
/************************************************/
/* Part 1 Search Country */
let inputedCountry;
searchCountry.addEventListener('click', function () {
  inputedCountry = userInput.value;
  getCountriesData(inputedCountry);
});

const getCountriesData = async function (country) {
  console.log(country);
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log(res);
  const [data] = await res.json();
  console.log(data);

  const countryData = `
    <div class="country-info">
        <img src="${data.flags.png}" />
        <div class="countries-data">
            <h3 class="description">${data.name.common}</h3>
            <p class="description">
            Population:  <span class="result">${data.population}</span>
            </p>
            <p class="description">Region: <span class="Europe">${data.region}</span></p>
            <p class="description">Capital: <span class="Berlin">${data.capital}</span></p>
        </div>
    </div>`;
  countriesContainer.insertAdjacentHTML('afterbegin', countryData);
};
/*************************************************/
/************************************************/
/*
const renderCountry = function (data) {
  const countryData = `
    <div class="country-info">
        <img src="${data.flags.png}" />
        <div class="countries-data">
            <h3 class="description">${data.name.common}</h3>
            <p class="description">
            Population:  <span class="result">${data.population}</span>
            </p>
            <p class="description">Region: <span class="Europe">${data.region}</span></p>
            <p class="description">Capital: <span class="Berlin">${data.capital}</span></p>
        </div>
    </div>`;
  countriesContainer.insertAdjacentHTML('afterbegin', countryData);
};*/
/***************************************************/
/**************************************************/
/*************************************************/
/************************************************/
/* Part 2 filter countries by continent*/
const europeCountries = [
  [
    'Austria',
    'Belgium',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'Ireland',
    'Italy',
    'Latvia',
    'Lithuania',
    'Luxembourg',
    'Malta',
    'Netherlands',
    'Poland',
    'Portugal',
    'Romania',
    'Slovakia (Slovak Republic)',
    'Slovenia',
    'Spain',
    'Sweden',
  ],
  [
    'Armenia',
    'Azerbaijan',
    'Bahrain',
    'Bangladesh',
    'Bhutan',
    'Brunei',
    'Cambodia',
    'China',
    'Cyprus',
    'Georgia',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Israel',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Lebanon',
    'Malaysia',
    'Maldives',
    'Mongolia',
    'Myanmar',
    'Nepal',
    'North Korea',
    'Oman',
    'Pakistan',
    'Palestine',
    'Philippines',
    'Qatar',
    'Russia',
    'Saudi Arabia',
    'Singapore',
    'South Korea',
    'Sri Lanka',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Thailand',
    'Timor Leste',
    'Turkey',
    'Turkmenistan',
    'United Arab Emirates',
    'Uzbekistan',
    'Vietnam',
    'Yemen',
  ],
  [
    'Algeria',
    'Angola',
    'Benin',
    'Botswana',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cameroon',
    'Central African Republic',
    'Chad',
    'Comoros',
    'Democratic Republic of the Congo',
    'Republic of the Congo',
    "Cote d'Ivoire",
    'Djibouti',
    'Egypt',
    'Equatorial Guinea',
    'Eritrea',
    'Ethiopia',
    'Gabon',
    'Gambia',
    'Ghana',
    'Guinea',
    'Guinea Bissau',
    'Kenya',
    'Lesotho',
    'Liberia',
    'Libya',
    'Madagascar',
    'Malawi',
    'Mali',
    'Mauritania',
    'Mauritius',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Niger',
    'Nigeria',
    'Rwanda',
    'Sao Tome and Principe',
    'Senegal',
    'Seychelles',
    'Sierra Leone',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Sudan',
    'Swaziland',
    'Tanzania',
    'Togo',
    'Tunisia',
    'Uganda',
    'Zambia',
    'Zimbabwe',
  ],
];

/*const renderCountries = europeCountries.map(continent =>
  continent.map(country => getCountriesData(country))
);*/

for (let i = 0; i < continentOption.length; i++) {
  continentOption[i].addEventListener('click', function () {
    if (continentOption[i].textContent === 'Europa') {
      europeCountries.map(continent =>
        continent.map(country => getCountriesData(country))
      );
    } else if (continentOption[i].textContent === 'Asia') {
      europeCountries.map(continent =>
        continent.map(country => getCountriesData(country))
      );
    } else if (continentOption[i].textContent === 'America') {
      europeCountries.map(continent =>
        continent.map(country => getCountriesData(country))
      );
    } else if (continentOption[i].textContent === 'Africa') {
      europeCountries.map(continent =>
        continent.map(country => getCountriesData(country))
      );
    }
  });
}
/****************************************************/
/***************************************************/
containerMode.addEventListener('click', function () {
  console.log(2222);
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('dark-mode-texts');
});
