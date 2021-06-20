import React from 'react';
import './styles.scss'
import Header from "../comps/Header";
import HeroText from "../comps/HeroText";
import {Grid} from "@material-ui/core";
import ImageGrid from "../comps/ImageGriid";
const Home = () => {
    return (
        <>
        <div className='page_container'>
            <Grid container justify='center' >
                    <Header/>
                    {/*<HeroText/>*/}
                    <ImageGrid/>
            </Grid>
        </div>
        </>

    );
};

export default Home
