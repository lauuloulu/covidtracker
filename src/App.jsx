import './App.css'
import Nav from './components/nav/Nav'
import Main from './components/main/Main'
import Container10 from './components/top10/Container10'
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
       
        <Nav/>
        <Container10/>
        
        <Main/>
    </>
  )
}


export default App
