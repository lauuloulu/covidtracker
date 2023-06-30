import './App.css'
import Nav from './components/nav/Nav'
import Summary from './components/summary/Summary'
import Main from './components/main/Main'
import Dropdown from './components/dropdown/Dropdown'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav/>
        <Dropdown/>
        <Summary/>
        <Main/>
    </>
  )
}


export default App
