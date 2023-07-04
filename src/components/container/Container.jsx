import './container.css'


function MiriContainer(props) {
    return(
        <>
            <div className={props.containerStyle}>
                <div className='Miriflex'>
                <div className='Miristart'>{props.containerText}</div>
                <ul className='Mirilista'>
                    <li className='dato2'>{props.containerText2}</li>
                    <li className={props.liStyle}>{props.containerText3}</li>
                </ul>
                </div>
            </div>
           
        </>
    )
}

export default MiriContainer