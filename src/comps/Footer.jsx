import React from 'react';
import {Button} from "@material-ui/core";
import {FaceOutlined, Instagram, Telegram} from "@material-ui/icons";
import './styles.scss'

const Footer = () => {
    return (
        <div className='footer_container'>
            <Button variant='text' >
                <FaceOutlined/>
            </Button>
            <Button variant='text' >
                <Instagram/>
            </Button>
            <Button variant='text' >
                <Telegram/>
            </Button>

        </div>
    );
};

export default Footer;