import './footer.css'
import CardFooter from '../molecules/CardFooter'


function ContainerFooter (){
    return(
        <>
        <div id="footer">
            <div id="cardfootcontainer">
        <CardFooter title='Total Confirmed' counter='12345' color='blue'/>
        <CardFooter title='Total Recovered' counter='0' color='green'/>
        <CardFooter title='Total Deaths' counter='54321' color='red'/>
        <CardFooter title='New Deaths' counter='666' color='redark'/>
        <CardFooter  title='Help line No.' counter='198' color='phone'/>

       
           </div>
        </div>

        </>
    )
}

export default ContainerFooter