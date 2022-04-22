const countriesName = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
countriesName()

const displayCountries = countries => {
    // console.log(countries)
    // for (const country of countries) {
    //     console.log(country)
    // }
    const country = document.getElementById('countries')
    countries.forEach(countries => {
        const div = document.createElement('div');
        div.classList.add('countries')
        div.innerHTML = `
        <h2>Country Name: ${countries.name}</h2>
        <h3> Capital: ${countries.capital}</h3>
        <button onclick="displayCountryDetail('${countries.name}')"> Country Details</button>
        `
        country.appendChild(div)
    })

}
const displayCountryDetail = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => countryDiv(data[0]))
}
const countryDiv = countryName => {
    console.log(countryName)
    const countryValue = document.getElementById('country-detail');
    countryValue.innerHTML = `
    <h3>${countryName.name}</h3>
    <img width="200px" src="${countryName.flag}">
    <p>Population: ${countryName.population}</p>
    `


}
