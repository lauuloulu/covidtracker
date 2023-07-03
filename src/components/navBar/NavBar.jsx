import './navBar.css'
import chatbox from '../../assets/chat-box.png'
import folder from '../../assets/folder.png'
import datamng from '../../assets/data-management.png'
import layers from '../../assets/layers.png'
import stats from '../../assets/stats.png'
import world from '../../assets/world.png'
import menubar from '../../assets/menu-bar.png'
import menu from '../../assets/menu.png'
import coronavirus from '../../assets/coronavirus.png'

function Navbar(){
  return(
    
       <div className='Navbar'>
        <img className='coronavirus' src={coronavirus} alt="Coronavirus" />
        <img className='image' src={datamng} alt="Data Management" />
        <img className='image' src={menubar} alt="Menu Bar" />
        <img className='image' src={menu} alt="Menu" />
        <img className='image' src={folder} alt="Folder" />
        <img className='image' src={layers} alt="Layers" />
        <img className='image' src={stats} alt="Stats" />
        <img className='image' src={world} alt="World" />
        <img className='image' src={chatbox} alt="Chat Box" />
        
        
        
        
        </div>
    
  );
}


export default Navbar;