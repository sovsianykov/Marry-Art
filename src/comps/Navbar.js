import React from 'react';
import {AppBar, TypographyVariant} from "@material-ui/core";

function Navbar() {
    return (
        <>
            <AppBar color='secondary'>
            <div className="logo">M.O.</div>
                <TypographyVariant  >
                   портфолио
                </TypographyVariant>
            </AppBar>
        </>
    );
}

export default Navbar;
