import React from 'react';
import {Link} from 'react-router-dom';
import About from '../pages/About';
import Projects from '../pages/Projects';




const Header = () => {
    return (
        <header className="App-header">
            <ul className="menu-ul">
                <li className="menu-li">
                <Link to="/">Home</Link>  
                </li>
                <li className="menu-li">
                  <Link to="/Projects">Projects</Link>  
                    
                </li>
                <li className="menu-li">
                <Link to="/About">About</Link>  
                 
                </li>
            </ul>
        </header>
    )
}

export default Header