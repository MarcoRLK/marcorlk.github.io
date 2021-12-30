import React  from 'react'
import './Panels.css'
import { CardGroup, Container, Card} from 'react-bootstrap'
import AnimatedIcon from './AnimatedIcon';
import Icon1 from './680-it-developer-outline-edited.json'
import Icon2 from './153-bar-chart-growth-outline-edited.json'
import Icon3 from './112-book-morph-outline-edited.json'

function Panels() {

    return (
        <div className='card-box'>
            <div className='title-reasons'>
                <h2>Conheça um pouco sobre mim e meus projetos</h2>
            </div>

            <div className='reasons'>
                <Container>
                    <CardGroup>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className='icon' >
                                    <AnimatedIcon icon={Icon1}/>
                                </div>                                
                                <Card.Title>Engenheiro de Software</Card.Title>
                                <Card.Text>
                                    Durante a minha graduação, tive a oportunidade de trabalhar com diversas linguagens, metodologias de desenvolvimento e tecnologias
                                </Card.Text>
                                <Card.Subtitle>Principal Linguagem</Card.Subtitle>
                                <Card.Text>
                                    Python
                                <Card.Subtitle>Outras tecnologias</Card.Subtitle>                    
                                    Java, C, R e Javascript
                                <Card.Subtitle>Metodologias de desenvolvimento</Card.Subtitle>
                                    Ágil, RUP, cascada, etc.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className='icon' >
                                    <AnimatedIcon icon={Icon2}/>
                                </div>   
                                <Card.Title>Interessado em Dados</Card.Title>
                                <Card.Text>
                                    Desde que fiz estágio no Tribunal de Contas da União (TCU), onde tive a oportunidade de trabalhar com Oracle, SQL Server e R, sou bastante interessado em projetos que envolvam a manipulação de dados e Machine Learning.
                                </Card.Text>
                                <Card.Subtitle>Exemplo de projeto</Card.Subtitle>
                                <Card.Text>
                                    TCC sobre técnicas de ML e PLN na identificação de comentários impróprios na web
                                <Card.Subtitle>Bibliotecas e SGBDs</Card.Subtitle>                    
                                    scikit learn, pandas, numpy, Oracle, SQL Server e PostgreSQL
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className='icon' >
                                    <AnimatedIcon icon={Icon3}/>
                                </div> 
                                <Card.Title>Diversos</Card.Title>
                                <Card.Text>
                                    O curso de ESW me permitiu adquirir familiaridade com diversas metodologias de desenvolvimento (ágeis, RUP, etc)
                                </Card.Text>
                                Conhecimento sobre algoritmos de ML como: Naive Bayes, Árvore de Decisão, Regressão Linear, entre outros
                                <Card.Subtitle>Idiomas:</Card.Subtitle>
                                <Card.Text>
                                Português e Inglês
                                <Card.Subtitle>Outras tecnologias:</Card.Subtitle>                    
                                    Testes (Pyteste)
                                    DevOps (Docker)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </div>
    )
}

export default Panels
