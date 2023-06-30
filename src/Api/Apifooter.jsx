import React, {useEffect, useState} from "react";

const CovidData = () => {
    const [cases, setCases]= useState(null);
    const [deaths, setDeaths]= useState(null);
    const [recovered, setRecovered]= useState(null);

    useEffect(() => {

const fetchData = async () => {
    try{
        const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=1');
        const data = await response.json();

        setCases(data.cases);
        setDeaths(data.death);
        setRecovered(data.recovered);
    } catch (error) {
        console.error('Error fetching data', error);
    }
};


fetchData();

    }, []);

    return(

    );

    
};

export default CovidData;