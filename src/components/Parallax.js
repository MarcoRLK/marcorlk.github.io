import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Parallax.scss';

function Parallax() {
    return (
        <div className='card-box'>
            <Tilt className="parallax-effect" perspective={800} trackOnWindow={true} style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg/2560px-Webysther_20160322_-_Logo_UnB_%28sem_texto%29.svg.png)" }}>
                <div className="inner-element" >
                    <div>Site em manutenção</div>
                    <div>Logo fica pronto</div>
                    <div>👀</div>
                </div>
            </Tilt>
        </div>
        
    )
}

export default Parallax
