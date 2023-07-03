import MiriContainer from "../container/Container";
import './summary.css'
import React, { useEffect, useState } from 'react';

function Summary(){
    const [historicalData, setHistoricalData] = useState(null);
  const [totalData, setTotalData] = useState(null);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=1');
        const jsonData = await response.json();
        setHistoricalData(jsonData);
      } catch (error) {
        console.error('Error fetching historical data:', error);
      }
    };

    const fetchTotalData = async () => {
      try {
        const response = await fetch('https://disease.sh/v3/covid-19/all');
        const jsonData = await response.json();
        setTotalData(jsonData);
      } catch (error) {
        console.error('Error fetching total data:', error);
      }
    };

    fetchHistoricalData();
    fetchTotalData();
  }, []);

  const totalConfirmed = totalData?.cases || 0;
  const todayCases = totalData?.todayCases || 0;
  const activeCases = totalData?.active || 0;
  const totalRecovered = totalData?.recovered || 0;
  const todayRecovered = totalData?.todayRecovered || 0;
  const totalDeaths = totalData?.deaths || 0;
  const newDeaths = totalData?.todayDeaths || 0;

    return(
        <>
            <div className='summary'>
                <h3>COVID-19 Tracker</h3>
                <MiriContainer containerStyle={'redstyle'} containerText={'Total Case'} containerText2={todayCases} containerText3={totalConfirmed} liStyle={'lired'} ></MiriContainer>
                <MiriContainer containerStyle={'orangestyle'} containerText={'Active Case'} containerText3={activeCases} liStyle={'liorange'} ></MiriContainer>
                <MiriContainer containerStyle={'greenstyle'} containerText={'Recovered Case'} containerText2={todayRecovered} containerText3={totalRecovered} liStyle={'ligreen'} ></MiriContainer>
                <MiriContainer containerStyle={'bluestyle'} containerText={'Deaths Case'} containerText2={newDeaths} containerText3={totalDeaths} liStyle={'liblue'} ></MiriContainer>
            </div>
        </>
    )
}
        
    


export default Summary