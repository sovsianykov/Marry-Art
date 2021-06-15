import React from 'react';
import {Typography} from "@material-ui/core";
import './styles.scss'
const Header = () => {
    return (
        <div className='header_container'>
            <div className="title-wrapper">
                <Typography variant='h3'  className='main_title' align='left'  >
                    Мария Овсяникова -
                </Typography>
                <Typography variant='h4'  className='main_subtitle' align='left'  >
                    художник-иллюстратор
                </Typography>
            </div>
        </div>
    );
};

export default Header ;