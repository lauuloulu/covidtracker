import './country-summary.css'
import Card from '../card/Card'

function CountrySummary() {
    return(
        <div id="country-summary">
            <Card title='Total Cases' counter='1231324124' color = 'purpple'/>
            <Card title='Total Deaths' counter='212341' color = 'red'/>
            <Card title='Total Recovered' counter='3123421' color = 'green'/>
            <Card title='Total Active' counter='4123412' color = 'blue'/>
            <Card title='New Cases' counter='44312' color = 'orange'/>
            <Card title='New Deaths' counter='123414' color = 'dark-red'/>
        </div>
    );
}

export default CountrySummary;