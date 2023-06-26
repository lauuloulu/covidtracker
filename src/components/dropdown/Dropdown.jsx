import './dropdown.css'
import { useState, useEffect } from 'react';

function Dropdown() {
    const [countries, setCountries] = useState([]);

    function showDropdown() {
        return(
            <div id="dropdown">
                <div className="country-select-box">
                    <select className="country-picker" id="CoronaUpdateByCountry">
                        {
                            countries.map(country => {
                                return (
                                    <option key={country.country} value={country.country}>
                                        { country.country }
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        );
    }

    
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => {
            return response.json();
        })
        .then((countries) => {
            console.log(countries);
            setCountries(countries);
        })
    }, []);

    return showDropdown()
}

export default Dropdown;