//import { useState } from 'react'
import './App.css'
import Checkout from './components/Checkout'
import Nav from './components/nav/Nav'
import Summary from './components/summary/Summary'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <Nav/>
        <Summary/>
        <Main/>
        <Footer/>
        <Checkout/>
    </>
  )
}


export default App
