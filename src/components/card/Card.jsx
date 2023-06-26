import './Card.css'


function Card({ title, counter }) {
    return (
        <>
            <div className="card">
                <div className="card-title">{title}</div>
                <div className="card-counter">{counter}</div>
                <div className="card-icon">
                    <img src="covid-blue.svg" alt=""/>
                </div>
            </div>
        </>
        
    )
}



export default Card