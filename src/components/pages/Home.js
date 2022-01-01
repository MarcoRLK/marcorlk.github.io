import React from 'react';
import Footer from '../Footer';
import Panels from '../Panels';
import Hero from '../Hero';
import "./Home.css"
import Portfolio from '../Portfolio';
import MyNavbar from '../MyNavbar';

function Home() {
    return (
        <div>        
            <div>
                <MyNavbar/>
                <Hero />
                <Panels />
                <Portfolio />
                <Footer />
            </div>
        </div>
    )
}

export default Home
