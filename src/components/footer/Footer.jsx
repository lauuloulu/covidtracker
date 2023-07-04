import React, { useEffect, useState } from 'react';
import './footer.css';
import CardFooter from '../molecules/CardFooter';
import CardContact from '../molecules/CardContact';

function ContainerFooter() {
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
  const totalRecovered = totalData?.recovered || 0;
  const totalDeaths = totalData?.deaths || 0;
  const newDeaths = totalData?.todayDeaths || 0;

  return (
    <>
      <div id="footer">
        <div id="cardfootcontainer">
          <CardFooter title="Total Confirmed" counter={totalConfirmed} color="blue" />
          <CardFooter title="Total Recovered" counter={totalRecovered} color="30deg" />
          <CardFooter title="Total Deaths" counter={totalDeaths} color="-65deg" />
          <CardFooter title="New Deaths" counter={newDeaths} color="-50deg" />
          <CardContact title="Help line nº" counter="198" />
        </div>
      </div>
    </>
  );
}

export default ContainerFooter;
