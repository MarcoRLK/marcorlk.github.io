import React, {useState} from 'react'
import './Portfolio.css'
import { Card, Button, Accordion, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Portfolio() {

    const [mouseIsOn, setMouseIsOn] = useState(false)

    return (
        <div className='portfolio-all'>
            <div className='portf-title'>
                <h1>Alguns dos meus projetos</h1>
            </div>

            <div className='portf-cards-container'>
                <CardGroup>
                <Card className="portf-card">
                    <Card.Img src="/images/img-home.jpg" />
                        <Card.ImgOverlay className='portif-card-img'>
                            <div className='inside-card'>
                                <Card.Title className='portif-card'>TCC</Card.Title>
                                <Card.Text className='portif-txt'>
                                Estudo sobre técnicas de Machine Learning e Processamento de linguagem natural na identificação de comentários impróprios na web.
                                </Card.Text>
                                <div className='portif-btns'>
                                    <Button variant="outline-primary">Ler monografia</Button>{' '}
                                </div>
                                
                            </div>
                        </Card.ImgOverlay>
                </Card>
                <Card className="portf-card">
                    <Card.Img src="/images/img-home.jpg" />
                        <Card.ImgOverlay className='portif-card-img'>
                            <div className='inside-card'>
                                <Card.Title className='portif-card'>Classificação de Risco Pediátrico</Card.Title>
                                <Card.Text className='portif-txt'>
                                Aplicação web que utiliza Machine Learning para a realização de triagem no contexto da pediatria. 
                                </Card.Text>
                                <div className='portif-btns'>
                                    <Button variant="outline-primary">Site</Button>{' '}
                                    <Button variant="outline-primary">Código</Button>{' '}
                                    <Button variant="outline-primary">Documentação</Button>{' '}
                                </div>
                               
                            </div>
                        </Card.ImgOverlay>
                </Card>
                <Card className="portf-card">
                    <Card.Img src="/images/img-home.jpg" />
                        <Card.ImgOverlay className='portif-card-img'>
                            <div className='inside-card'>
                                <Card.Title className='portif-card'>YiRestaurants</Card.Title>
                                <Card.Text className='portif-txt'>
                                Front-end mobile para um aplicativo de restaurante usando React Native
                                </Card.Text>
                                <div className='portif-btns'>
                                    <Button variant="outline-primary">Código</Button>{' '}
                                </div>
                            </div>
                        </Card.ImgOverlay>
                </Card>
                </CardGroup>
            </div>

                


            
        </div>
    )
}

export default Portfolio
