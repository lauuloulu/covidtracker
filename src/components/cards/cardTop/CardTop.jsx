import "./CardTop.css"

export default function CardTop(props) {
  return (

    <div className="cardTop">
      <div className="imagen">
        <img src={props.image} height={50} width={50} alt="" />
        <p className="textPais">{props.nombre}</p>
      </div>
      <div className='datos'>
      <p className="textDato">{props.datos}</p>
    </div>
    </div>
  )
}
