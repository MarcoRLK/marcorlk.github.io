import React from 'react'
import './Portfolio.css'
import { Card, Button, CardGroup } from 'react-bootstrap'
import { FaGithub, FaExternalLinkAlt, FaFileAlt, FaFileCode} from "react-icons/fa";
import AnimatedIcon from './AnimatedIcon';
import GitLogo from './github-logo.json'

function Portfolio() {


    return (
        <div className='portfolio-all'>
            <div className='portf-title'>
                <h1>Alguns dos meus projetos</h1>
            </div>

            <div className='portf-cards-container'>
                <CardGroup>
                <Card className="portf-card">
                    <Card.Img src="/images/unb.png" />
                        <Card.ImgOverlay className='portif-card-img'>
                            <div className='inside-card'>
                                <Card.Title className='portf-card-title'>TCC</Card.Title>
                                <Card.Text className='portif-txt'>
                                Estudo sobre técnicas de Machine Learning e Processamento de linguagem natural na identificação de comentários impróprios na web.
                                </Card.Text>
                                <div className='portif-btns'>
                                    <Button variant="primary" size="sm"><FaFileAlt/> Ler monografia</Button>{' '}
                                </div>
                                
                            </div>
                        </Card.ImgOverlay>
                </Card>
                <Card className="portf-card">
                    <Card.Img src="/images/LogoCRP.png" />
                        <Card.ImgOverlay className='portif-card-img'>
                            <div className='inside-card'>
                                <Card.Title className='portf-card-title'>Classificação de Risco Pediátrico</Card.Title>
                                <Card.Text className='portif-txt'>
                                Aplicação web que utiliza Machine Learning para a realização de triagem no contexto da pediatria. 
                                </Card.Text>
                                <div className='portif-btns'>
                                    <Button variant="primary" size="sm"><FaExternalLinkAlt/> Site</Button>{' '}
                                    <Button variant="primary" size="sm"><FaGithub/> Código</Button>{' '}
                                    <Button variant="primary" size="sm"><FaFileCode/> Documentação</Button>{' '}
                                </div>
                               
                            </div>
                        </Card.ImgOverlay>
                </Card>
                <Card className="portf-card">
                    <Card.Img src="/images/react-native.png" />
                        <Card.ImgOverlay className='portif-card-img'>
                            <div className='inside-card'>
                                <Card.Title className='portf-card-title'>YiRestaurants</Card.Title>
                                <Card.Text className='portif-txt'>
                                Front-end para um aplicativo mobile de restaurante usando React Native
                                </Card.Text>
                                <div className='portif-btns'>
                                    <Button variant="primary" size="sm"><FaGithub/> Código</Button>{' '}
                                </div>
                            </div>
                        </Card.ImgOverlay>
                </Card>
                </CardGroup>
            </div>

            <AnimatedIcon icon={GitLogo}/>
            
        </div>
    )
}

export default Portfolio
