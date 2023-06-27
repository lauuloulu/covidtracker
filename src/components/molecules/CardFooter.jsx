import './cardfooter.css'

function CardFooter ({title, counter, color}){
    return(
        <div className="cardfoot">
            <div className="imagefoot">
                <img src="./src/assets/covid-defult.svg" height={50} width={50}  alt="covid icon" />
            </div >
            <div className="textfoot">
               <p className='texttitle'>{title}</p>
               <p className='textnumber'>{counter}</p>
            </div>
        </div>

    )
}

export default CardFooter