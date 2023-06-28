import './cardfooter.css'
import  Covidlogo from '../../assets/covid-blue.svg'

function CardFooter ({ title, counter, color}){
    


    return(
        <div className="cardfoot">
            <div className="imagefoot">
                <img src={Covidlogo} height={50} width={50}  alt="covid icon" style={{ filter: `invert(100%) sepia(100%) hue-rotate(${color}) saturate(1000%)` }}/>
            </div >
            <div className="textfoot">
               <p className='texttitle'>{title}</p>
               <p className='textnumber'>{counter}</p>
            </div>
        </div>

    );
}

export default CardFooter