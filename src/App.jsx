import './App.css'
import ContainerCard from './components/flagContainer/FlagContainer'
import CustomNav from './components/navBar/NavBar'


function App() {
  

  return (
    <>
    
    <ContainerCard></ContainerCard> 
    <CustomNav
    li={[
        ["Covid"],
        ["Covid"],
        ["Covid"],
        ["Covid"],
        ["Covid"]
      ]}
     />
    </>
  )
}

export default App
