import React from 'react'
import './Panels.css'
import SkillCard from './SkillCard'

function Panels() {
    return (
        <div className='card-box'>
            <div className='title-reasons'>
                <h2>5 motivos para contratar o Marco como cientista de dados</h2>
            </div>

            <div className='reasons'>
                <div className='single-reason'>
                    <p>
                    Boa base de programação   
                    </p>
                    <SkillCard/>
                </div>
                <div className='single-reason'>
                    <p>
                    Experiência com manipulação de dados  
                    </p>
                </div>
                <div className='single-reason'>
                    <p>
                    Experiência com Machine Learning  
                    </p>
                </div>
                <div className='single-reason'>
                    <p>
                    Boa base de Probabilidade e Estatística
                    </p>
                </div>
                <div className='single-reason'>
                    <p>
                    Extras!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Panels
