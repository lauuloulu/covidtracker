import "./CardTop.css"

export default function CardTop(props) {
  return (

    <div className="cardTop">
      <div className="imagen">
        <img src="./src/assets/covid-blue còpia.svg" height={50} width={50} alt="" />
      </div>
      <p className="textPais">{props.country.country}</p>
      <p className="textDato"></p>
    </div>

  )
}
