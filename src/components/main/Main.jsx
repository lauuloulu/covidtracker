import './Main.css'
import Header from '../header/Header'
import CountrySummary from '../country-summary/CountrySummary'
import Footer from '../footer/Footer'
import CardMap from '../Map/map'

function Main() {
    return(
        <>
            <div id="main">
                <Header/>
                <div className="center">
                   <CountrySummary/>
                   <CardMap/>
                </div>
                <Footer/>
            </div>
        </>
    )
}


export default Main