import './App.css'
import Nav from './components/nav/Nav'
import Summary from './components/summary/Summary'
import Main from './components/main/Main'
import Container10 from './components/top10/Container10'


function App() {
  

  return (
    <>
       <div className="nav">
         <Nav/>
        </div>
        <div className="containerCountries">
          <Summary/>
          <Container10/>
        </div>
        <div className="main">
          <Main/>
        </div>
    </>
  )
}


export default App