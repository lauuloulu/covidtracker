import './Main.css'
import Header from '../header/Header'
import CountrySummary from '../country-summary/CountrySummary'
import Footer from '../footer/Footer'

function Main() {
    return(
        <>
            <div id="main">
                <Header/>
                <CountrySummary/>
                <Footer/>
            </div>
        </>
    )
}


export default Main