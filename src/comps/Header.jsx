import React from 'react';
import {Typography} from "@material-ui/core";
import './styles.scss'
const Header = () => {
    return (
        <div className='header_container'>
            <div className="title-wrapper">
                <Typography variant='h5'  className='main_title' align='left'  >
                </Typography>
                <Typography variant='body1'  className='main_subtitle' align='left'  >
                    "Привет, я Мери Овсяникова.<br/>
                    Профессионально занимаюсь иллюстрацией,<br/>
                    рисую  традиционными материалами и CG"
                </Typography>
            </div>
        </div>
    );
};

export default Header ;
