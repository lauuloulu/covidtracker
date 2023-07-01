import { useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import Summary from './components/summary/Summary'
import Main from './components/main/Main'
import Dropdown from './components/dropdown/Dropdown'
import ContainerFooter from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav/>
        <Dropdown/>
        <Summary/>
        <Main/>
        <ContainerFooter/>
    </>
  )
}


export default App
