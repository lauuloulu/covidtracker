import './Main.css'
import Header from '../header/Header'
import CountrySummary from '../country-summary/CountrySummary'
import Footer from '../footer/Footer'
import CardMap from '../Map/map'
import { useState } from 'react';

function Main() {
    const [selectedCountryName, setSelectedCountryName] = useState('Afghanistan');

    const handleCountrySelectionCallback = (countryName) => {
        setSelectedCountryName(countryName);
    }

    return(
        <>
            <div id="main">

                <Header countryNameCallback={handleCountrySelectionCallback}/>

                <div className="center">
                   <CountrySummary countryName={selectedCountryName}/>
                   <CardMap/>
                </div>
                
                <Footer/>
                
            </div>
        </>
    )
}


export default Main