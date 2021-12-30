import React from 'react'
import './Hero.css'
import Parallax from './Parallax'

function Hero() {
    return (
        <div>
            <div className='main'>
                <div className='center'>
                    <h2>Marco Kuroiva</h2>
                    <p>Bacharel em Engenharia de Software pela UnB</p>
                    <Parallax/>
                </div>
            </div>
        </div>
    )
}

export default Hero
