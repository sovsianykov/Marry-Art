import React from 'react';
import './styles.scss'
import Navbar from "../comps/Navbar";
import Header from "../comps/Header";
import ToolHeadline from "../comps/ToolHeadline";
import HeroText from "../comps/HeroText";
import Footer from "../comps/Footer";
const Home = () => {
    return (
        <div className='page_container'>
            <Navbar/>
            <Header/>
            <ToolHeadline/>
            <HeroText/>
            <Footer/>
        </div>
    );
};

export default Home