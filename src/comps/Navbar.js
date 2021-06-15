import React from 'react';
import {AppBar } from "@material-ui/core";
import './styles.scss'

function Navbar() {
    return (
        <>
             <AppBar style={{backgroundColor: 'white'}} className='nav'  >

                 {/*<ul className="list">*/}
                 {/*    <ListItem button component={Link} className='links'>главная</ListItem>*/}
                 {/*    <ListItem button component={Link} className='links'>обо мне</ListItem>*/}
                 {/*    <ListItem button component={Link} className='links'>галлерея</ListItem>*/}
                 {/*    <ListItem button component={Link} className='links'>контакты</ListItem>*/}
                 {/*</ul>*/}

             </AppBar>
        </>
    );
}

export default Navbar;
