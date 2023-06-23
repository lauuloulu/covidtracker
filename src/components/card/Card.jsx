import './Card.css'

function Card({ title, counter }) {
    return (
        <>
            <div>total cases {title}</div>
            <div>{counter}</div>
        </>
    )
}

export default Card