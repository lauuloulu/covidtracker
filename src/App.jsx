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


export default App
