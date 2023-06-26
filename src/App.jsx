import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav/Nav'
import Summary from './components/summary/Summary'
import Main from './components/main/Main'
import Dropdown from './components/dropdown/Dropdown'


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
