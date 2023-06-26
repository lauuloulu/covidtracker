import './Card.css'
export default class Card extends React.Component{
    render(){
        return (
            <div className="card">
               <div className="cardlogo">
                <img src="./src/assets/covid-blue.svg" alt="covid-blue" />
               </div>
               <div className="cardcontent">
                <h1>Total Cases</h1>
                <p>938475658</p>
               </div>

            </div>
        )
    }
}