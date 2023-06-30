import { useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import Summary from './components/summary/Summary'
import Main from "../src/components/main/Main"
import Dropdown from './components/dropdown/Dropdown'
import Container10 from '../src/components/top10/Container10'
import Footer from '../src/components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav/>
        <Container10/>
        <Dropdown/>
        <Summary/>
        <Main/>
        <Footer></Footer>
    </>
  )
}


export default App
