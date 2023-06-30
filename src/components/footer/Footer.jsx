import './footer.css'
import CardFooter from '../molecules/CardFooter'
import CardContact from '../molecules/CardContact'


function ContainerFooter (){
    return(
        <>
        <div id="footer">
            <div id="cardfootcontainer">
        <CardFooter title='Total Confirmed' counter='12345' color='blue'/>
        <CardFooter title='Total Recovered' counter='0' color='30deg'/>
        <CardFooter title='Total Deaths' counter='54321' color='-65deg'/>
        <CardFooter title='New Deaths' counter='666' color='-50deg'/>
        <CardContact title='Help line nº' counter='198'/>

       
           </div>
        </div>

        </>
    )
}

export default ContainerFooter