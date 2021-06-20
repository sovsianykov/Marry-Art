import React from 'react';
import {AppBar } from "@material-ui/core";
import './styles.scss'
import logo1 from '../assets/logo-black.png'

function Navbar() {
    return (
        <>
             <AppBar style={{backgroundColor: 'white'}} className='nav'  >
                 <div className="logo">
                    <img src={logo1} alt='log'/>
                 </div>
             </AppBar>
        </>
    );
}

export default Navbar;
