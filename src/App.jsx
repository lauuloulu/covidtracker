import './App.css'
import NavBar from './components/navBar/NavBar'
import Summary from './components/summary/Summary'
import Container10 from './components/top10/Container10'
import Main from './components/main/Main'

function App() {
  

  return (
    <>
       <div className="nav">
         <NavBar/>
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