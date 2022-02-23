const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data));
}

loadCountry();

const displayCountry = (countries) => {
    const countryMainDiv = document.getElementById('country-load');
    countries.forEach(country => {
        // console.log(country);
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('col-12', 'col-md-3', 'col-lg-4', 'text-center', 'py-3');
        innerDiv.innerHTML = `
            <img class="img-fluid" src="${country.flags.svg}" alt="">
            <h3 class="mt-2 text-primary">${country.name.common}</h3>
            <h5>${country.capital}</h5>
            <button class="btn btn-primary" onclick="countryName('${country.name.common}')">Country Details</button>
        `;
        countryMainDiv.appendChild(innerDiv);
    });
}

// <p>${country.name.official}</p>


const countryName = async Cname =>{
    const url = `https://restcountries.com/v3.1/name/${Cname}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data[0].name);
     const singleCountry = document.getElementById('singleCountry');
     singleCountry.textContent = '';
     const div = document.createElement('div');
     div.innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
            <img class="img-fluid" src="${data[0].flags.svg}" alt="">
        </div>
        <div class="text-center mt-3">
                
                <h5 class="text-primary">${data[0].name.common}</h5>
                <h6 class="text-primary">${data[0].capital}</h6>

            <div class="border border-lg p-3">
                <p>${data[0].altSpellings}</p>
                <p><span class="fw-bolder">Poputalion :</span> ${data[0].population}</p>
                <p><span class="fw-bolder">Currencies :</span> ${data[0]?.currencies[0]?.name}</p>
            </div>
        </div>
     `;
     singleCountry.appendChild(div);

}