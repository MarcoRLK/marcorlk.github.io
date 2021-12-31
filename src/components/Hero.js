import React from 'react'
import './Hero.css'
import AnimatedIcon from './AnimatedIcon';
import animHome from './anim-home.json'

function Hero() {
    return (
        <div>
            <div className='main'>
                <div className='home-txt'>
                    <h5 className='greetings'>Olá! Meu nome é</h5>
                    <h1 className='name'>Marco Kuroiva</h1>
                    <p className='description'>Bacharel em Engenharia de Software pela UnB</p>
                </div>
                <div className='animation' >
                    <AnimatedIcon icon={animHome}/>
                </div>
            </div>
        </div>
    )
}

export default Hero
