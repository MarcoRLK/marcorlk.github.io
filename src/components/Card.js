import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Card.scss';

function Card() {
    return (
        <Tilt className="parallax-effect" perspective={800} style={{ backgroundImage: "url(/images/img-home.jpg)" }}>
            <div className="inner-element" >
                <div>Conheça o Marco</div>
                <div>e contrate-o</div>
                <div>👀</div>
            </div>
        </Tilt>
    )
}

export default Card
