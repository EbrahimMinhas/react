import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js';
import {Link} from 'react-router-dom';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_togglebutton">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <Link to="/">
                <div className="toolbar_logo"><a href="/">The Logo</a></div>
            </Link>
            <div className="spacer"></div>         
            <div className="toolbar_navigation-items">
                <ul>
                    <Link to='/about'>
                    <li><a>About</a></li>
                    </Link>
                    <li><a >User</a></li>
                </ul>
            </div>
        </nav>

    </header>


);

export default toolbar ;

