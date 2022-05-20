import React from 'react';
import {Link} from 'react-router-dom';




const Header = () => {
    return (
        <header className="App-header">
            <ul className="menu-ul">
                <li className="menu-li">
                <Link className='menu-a' to="/">Home</Link>  
                </li>
                <li className="menu-li">
                  <Link className='menu-a' to="/Projects">Projects</Link>  
                    
                </li>
                <li className="menu-li">
                <Link className='menu-a' to="/About">About</Link>  
                 
                </li>
            </ul>
        </header>
    )
}

export default Header