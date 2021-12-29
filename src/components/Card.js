import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Card.scss';

function Card() {
    return (
        <div className='card-box'>
            <Tilt className="parallax-effect" perspective={800} style={{ backgroundImage: "url(/images/img-home.jpg)" }}>
                <div className="inner-element" >
                    <div>Site em manutenção</div>
                    <div>Logo fica pronto</div>
                    <div>👀</div>
                </div>
            </Tilt>
        </div>
        
    )
}

export default Card
