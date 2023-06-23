import './Main.css' 
import Card from '../card/Card'

function Main() {
    return(
        <>
            <div id="main">
                <Card title='Title' counter='1234'/>
                <Card title='Title2' counter='2'/>
                <Card title='Title3' counter='3'/>
                <Card title='Title4' counter='4'/>
            </div>
        </>
    )
}

export default Main