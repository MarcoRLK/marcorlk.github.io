import React from 'react';
import './Footer.css';
import { FaReact } from "react-icons/fa";
import AnimatedIcon from './AnimatedIcon';
import mailIcon from './mail.json'

function Footer() {
    return (
        <div className='whole-footer'>
            <div className='text-block'>
                <h2>Interessado em trabalhar comigo?</h2>
                <h4>Entre em contato e vamos conversar!</h4>
            </div>
            <div className='contacts'>
                <AnimatedIcon icon={mailIcon}/>
            </div>
            <div className='credits'>
                <p> © Site desenvolvido por mim com React  <FaReact/></p>
                <p>Ícones animados: lordicon</p>
            </div>
        </div>
    )
}

export default Footer
