import React from 'react';
import {AppBar, Typography, TypographyVariant} from "@material-ui/core";

function Navbar() {
    return (
        <>
            <AppBar style={{backgroundColor: 'white'}} className='nav' >
                <Typography variant='h3' color='initial' className='nav-title' >
                   портфолио
                </Typography>
            </AppBar>
        </>
    );
}

export default Navbar;
