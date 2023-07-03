import './header.css';
import Dropdown from '../dropdown/Dropdown';

function Header({ countryNameCallback }) {
    return(
        <div id="header">
            
      <Dropdown countryNameCallback={countryNameCallback}/>
      
        
        </div>
       
    );
}
  

    
    

export default Header;