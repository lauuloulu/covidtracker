
import './country-summary.css'
import Card from '../card/Card'
import { useState, useEffect } from 'react';

function CountrySummary({ countryName }) {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((countries) => setCountries(countries))
    }, []);

    function getCountry() {
        const country = countries.find(country => country.country === countryName);
        console.log('Country', country);
        return country;
    }
    const country = getCountry();

    if (country === undefined) {
        return (<div>Cargando...</div>)
    } else {
        return(
            <div id="country-summary">
                <Card title='Total Cases' counter={country.cases} color = 'purpple'/>
                <Card title='Total Deaths' counter={country.deaths} color = 'red'/>
                <Card title='Total Recovered' counter={country.recovered} color = 'green'/>
                <Card title='Total Active' counter={country.active} color = 'blue'/>
                <Card title='New Cases' counter={country.todayCases} color = 'orange'/>
                <Card title='New Deaths' counter={country.todayDeaths} color = 'dark-red'/>
            </div>
        );
    }
}

export default CountrySummary;