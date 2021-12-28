import React from 'react';
import Card from '../Card';
import Footer from '../Footer';
import Panels from '../Panels';
import Hero from '../Hero';
import "./Home.css"

function Home() {
    return (
        <div>
            <div>
                <Hero/>
                <Card />
                <Panels />
                <Footer />
            </div>
        </div>
    )
}

export default Home
