import React from 'react';
import {Typography} from "@material-ui/core";
import './styles.scss'
const HeroText = () => {
    return (
        < Typography variant='h6'  align='center'  className='hero_text_container'>
            Привет, я Мери Овсяникова. <br/>
            Профессионально занимаюсь иллюстрацией,<br/>
            рисую  традиционными материалами и CG
        </Typography>
    );
};

export default HeroText
