import './App.css'
import Nav from './components/nav/Nav'
import Summary from './components/summary/Summary'
import Main from './components/main/Main'
<<<<<<< HEAD
=======
import Dropdown from './components/dropdown/Dropdown'
>>>>>>> 4b23186d407aa87c115058e814faed68053b343e


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
        <Nav/>
=======
       
        <Nav/>
        <Dropdown/>
>>>>>>> 4b23186d407aa87c115058e814faed68053b343e
        <Summary/>
        <Main/>
    </>
  )
}


<<<<<<< HEAD


function App2() {
    const [count, setCount] = useState(0)
  
    return (
      <>
          <Nav/>
          <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }
  

=======
>>>>>>> 4b23186d407aa87c115058e814faed68053b343e
export default App
