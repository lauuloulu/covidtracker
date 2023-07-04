import './Card.css'
import covidImage from '../../assets/covid-blue.svg'


function Card({ title, counter, color }) {
    return (
        <>
            <div className="card">
                <div className="card-title">{title}
                <img src='http://www.w3.org/2000/svg' alt=""/></div>
                <div
                className="card-counter"
                style={{color: color}}>
                    {counter}
                </div>
                
                <div className="card-icon">
                    <img src={covidImage} alt=""/>
                </div>
            </div>
        </>
        
    )
}



export default Card