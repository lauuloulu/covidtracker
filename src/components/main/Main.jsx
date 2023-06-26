import './Main.css' 
import Card from '../card/Card'

function Main() {
    return(
        <>
            <div id="main">
                <Card title='Total Cases' counter='1231324124'/>
                <Card title='Total Deaths' counter='212341'/>
                <Card title='Total Recovered' counter='3123421'/>
                <Card title='Total Active' counter='4123412'/>
                <Card title='New Cases' counter='44312'/>
                <Card title='New Deaths' counter='123414'/>
            </div>
        </>
    )
}


export default Main