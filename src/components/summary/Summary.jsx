import MiriContainer from "../container/Container";
import './summary.css'


function Summary(){
    
    return(
        <>
            <div className='summary'>
                <h3>COVID-19 Tracker</h3>
                <MiriContainer containerStyle={'redstyle'} containerText={'Total Case'} containerText2={'Dif casos'} containerText3={'Cifra casos'} liStyle={'lired'} ></MiriContainer>
                <MiriContainer containerStyle={'orangestyle'} containerText={'Active Case'} containerText2={'Dif casos'} containerText3={'Cifra casos'} liStyle={'liorange'} ></MiriContainer>
                <MiriContainer containerStyle={'greenstyle'} containerText={'Recovered Case'} containerText2={'Dif casos'} containerText3={'Cifra casos'} liStyle={'ligreen'} ></MiriContainer>
                <MiriContainer containerStyle={'bluestyle'} containerText={'Deaths Case'} containerText2={'Dif casos'} containerText3={'Cifra casos'} liStyle={'liblue'} ></MiriContainer>
            </div>
        </>
    )
}
        
    


export default Summary