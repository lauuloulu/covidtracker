import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav/Nav'
import Summary from './components/summary/Summary'
import Main from './components/main/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav/>
        <Summary/>
        <Main/>
    </>
  )
}

import React from "react";
import "./App.css";



export default App
