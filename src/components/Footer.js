import React from 'react';
import './Footer.css';
import { FaReact } from "react-icons/fa";
import AnimatedIcon from './AnimatedIcon';
import mailIcon from './mail.json';

function Footer() {
    return (
        <div className='whole-footer'>
            <div className='text-block'>
                <h2>Interessado em trabalhar comigo?</h2>
                <h4>Entre em contato e vamos conversar!</h4>
            </div>
            <div className='contacts'>
                <AnimatedIcon icon={mailIcon} height={100} width={100}/>
                marco.antoniorl10@gmail.com
            </div>
            <div className='credits'>
                <p> © Site desenvolvido por mim com React  <FaReact/></p>
                <p>Ícones animados: <a href="https://lordicon.com/" target="_blank">lordicon</a></p>
            </div>
        </div>
    )
}

export default Footer
