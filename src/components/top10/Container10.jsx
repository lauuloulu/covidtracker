import './container10.css'
import CardTop from '../cards/cardTop/CardTop'
import { useState, useEffect } from 'react';

function Container10() {
    // Al crear la variable paises utilizando el estado, re-renderizara el componente cuando cambie el valor de esta (la variable)
   // const [paises, setPaises] = useState([]);
   // setPaises( ['Spain', 'Colombia'])  
   // const paises = ['Spain', 'Colombia']

   const [countries, setCountries] = useState([]);

  // https://disease.sh/v3/covid-19/countries - endpoint para traer todos los paises. Meter en un array y ordenarlo por propiedad cases de manera descendente (de mas a menos)
 
  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries') 
      .then(response => response.json())
      .then(json => setCountries(json))
      .catch(error => console.error(error));
  }, []);

  const sortedData = countries?.sort((a, b) => b.cases - a.cases);
  const topTenCountries = sortedData?.slice(0, 10);


    return (
        <>  <div className='padre'>
            <div>
                <p>Top 10 Country </p>
            </div>
            {topTenCountries.map((country, index) => (
                <CardTop key={index} nombre={country.country} datos={country.cases} image={country.countryInfo.flag}/>
            ))}

            </div>
        </>
    );
}

export default Container10