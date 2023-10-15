import React from 'react';
import Header from "../components/Header.jsx";
import Body from "../components/Body.jsx";
import Footer from "../components/Footer.jsx";
import MainPic from '../json/MainPic.json';
import OtherVegetables from '../json/OtherVegetables.json';
import Contact from '../json/Contact.json';

// export default function HOMEPAGE() {
function HOMEPAGE(){
    return (
        <div className="vegetable-layout-rwd">
            <Header/>
            {/* <Body/> */}
            <Body Contact={Contact} MainPic={MainPic} OtherVegetables={OtherVegetables}/>
            <Footer/>
        </div>
    );
}

export default HOMEPAGE