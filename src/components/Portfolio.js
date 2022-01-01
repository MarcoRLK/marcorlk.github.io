import React from 'react'
import './Portfolio.css'
import { Card, Button, CardGroup, Container, Row, Col} from 'react-bootstrap'
import { FaGithub, FaExternalLinkAlt, FaFileAlt, FaFileCode} from "react-icons/fa";

function Portfolio() {


    return (
        <div className='portfolio-all'>
            <div className='portf-title'>
                Alguns dos meus projetos
            </div>

            <Container className='portf-cards-container'>
                <CardGroup>
                <Row xs={1} sm={1} md={2} xxl={4}>
                    <Col sm>
                        <Card className="portf-card">
                            <Card.Img src="/images/unb.png" />
                                <Card.ImgOverlay className='portif-card-img'>
                                    <div className='inside-card'>
                                        <Card.Title className='portf-card-title'>TCC</Card.Title>
                                        <Card.Text className='portif-txt'>
                                        Estudo sobre técnicas de Machine Learning e Processamento de linguagem natural na identificação de comentários impróprios na web.
                                        </Card.Text>
                                        <div className='portif-btns'>
                                            <a href="https://bdm.unb.br/handle/10483/23075" target="_blank">
                                            <Button variant="primary" size="sm"><FaFileAlt/> Ler monografia</Button>{''}
                                            </a>
                                        </div>
                                        
                                    </div>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card className="portf-card">
                            <Card.Img src="/images/LogoCRP.png" />
                                <Card.ImgOverlay className='portif-card-img'>
                                    <div className='inside-card'>
                                        <Card.Title className='portf-card-title'>Classificação de Risco Pediátrico</Card.Title>
                                        <Card.Text className='portif-txt'>
                                        Aplicação web que utiliza Machine Learning para a realização de triagem no contexto da pediatria. 
                                        </Card.Text>
                                        <div className='portif-btns'>
                                            <a href="https://fga-crp.herokuapp.com/" target="_blank">
                                                <Button variant="primary" size="sm"><FaExternalLinkAlt/> Site</Button>{' '}
                                            </a>
                                            <a href="https://github.com/fga-eps-mds/2017.2-Classificacao-de-Risco-Pediatrico" target="_blank">
                                                <Button variant="primary" size="sm"><FaGithub/> Código</Button>{' '}
                                            </a>
                                            {/*<Button variant="primary" size="sm"><FaFileCode/> Documentação</Button>{' '}*/}
                                        </div>
                                    
                                    </div>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card className="portf-card">
                            <Card.Img src="/images/logo_iespv.jpg" />
                                <Card.ImgOverlay className='portif-card-img'>
                                    <div className='inside-card'>
                                        <Card.Title className='portf-card-title'>IESPV Administrativo</Card.Title>
                                        <Card.Text className='portif-txt'>
                                        Aplicação para administrar doações ao Instituto Elos de Solidariedade Pró-Vidas, instituição social sem fins lucrativos
                                        </Card.Text>
                                        <div className='portif-btns'>
                                            <a href="https://github.com/amigos-do-gesiel/iespv-administrativo" target="_blank">
                                                <Button variant="primary" size="sm"><FaGithub/> Código</Button>{' '}
                                            </a>
                                            <a href="https://github.com/amigos-do-gesiel/iespv-administrativo/wiki" target="_blank">
                                                <Button variant="primary" size="sm"><FaFileCode/> Documentação</Button>{' '}
                                            </a>
                                        </div>
                                    </div>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card className="portf-card">
                            <Card.Img src="/images/react-native.png" />
                                <Card.ImgOverlay className='portif-card-img'>
                                    <div className='inside-card'>
                                        <Card.Title className='portf-card-title'>YiRestaurants</Card.Title>
                                        <Card.Text className='portif-txt'>
                                        Front-end para um aplicativo mobile de restaurante usando React Native
                                        </Card.Text>
                                        <div className='portif-btns'>
                                            <a href="https://github.com/MarcoRLK/YiRestaurants" target="_blank">
                                                <Button variant="primary" size="sm"><FaGithub/> Código</Button>{' '}
                                            </a>
                                        </div>
                                    </div>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                </CardGroup>
            </Container>

            <div className='see-more'>
                <Button variant="outline-primary" size="lg">
                    
                    <div>
                        <a href="https://github.com/MarcoRLK/" target="_blank">
                            <FaGithub/>     Veja mais no meu Github
                        </a>
                    </div>
                    
                </Button>{' '}
            </div>
            
        </div>
    )
}

export default Portfolio
