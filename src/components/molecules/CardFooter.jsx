import './cardfooter.css'

function CardFooter (){
    return(
        <div className="cardfoot">
            <div className="imagefoot">
                <img src="./src/assets/covid-blue.svg" height={50} width={50}  alt="covid blue" />
            </div >
            <div className="textfoot">
               <p className='texttitle'>Total Cases</p>
               <p className='textnumber'>7482945</p>
            </div>
        </div>

    )
}

export default CardFooter