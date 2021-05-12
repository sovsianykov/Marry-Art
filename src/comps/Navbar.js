import React from 'react';
import {AppBar, Typography, Button, Link, ListItem} from "@material-ui/core";
import './styles.scss'

function Navbar() {
    return (
        <>
             <AppBar style={{backgroundColor: 'white'}} className='nav'  >


                 <Typography variant='h3' color='initial' className='nav_title' align='left'  >
                    Мария Овсяникова художник-иллюстратор
                 </Typography>
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
