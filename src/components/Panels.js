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
            <div className='title-panels'>
                <h2>Conheça um pouco sobre mim e meus projetos</h2>
            </div>

            <div className='reasons'>
                <Container>
                    <CardGroup>
                        <Card className='indiv-card'>
                            <Card.Body>
                                <div className='icon' >
                                    <AnimatedIcon icon={Icon1}/>
                                </div>                                
                                <Card.Title className='card-title'>Engenheiro de Software</Card.Title>
                                <Card.Text className='card-text'>
                                    Durante a minha graduação, tive a oportunidade de trabalhar com diversas linguagens, metodologias de desenvolvimento e tecnologias
                                </Card.Text>
                                <Card.Subtitle className='card-subtitle'>Principal Linguagem</Card.Subtitle>
                                <Card.Text>
                                    Python
                                <Card.Subtitle>Outras linguagens:</Card.Subtitle>                    
                                    Java, C, R, Javascript e SQL
                                <Card.Subtitle>Metodologias de desenvolvimento:</Card.Subtitle>
                                    Ágil, RUP, cascata, etc.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className='indiv-card'>
                            <Card.Body>
                                <div className='icon' >
                                    <AnimatedIcon icon={Icon2}/>
                                </div>   
                                <Card.Title>Interessado em Dados</Card.Title>
                                <Card.Text>
                                    Desde que fiz estágio no Tribunal de Contas da União (TCU), onde tive a oportunidade de trabalhar com Oracle, SQL Server e R, sou bastante interessado em manipulação de dados e Machine Learning.
                                </Card.Text>
                                <Card.Subtitle>Exemplo de projeto:</Card.Subtitle>
                                <Card.Text>
                                    TCC sobre técnicas de ML e PLN na identificação de comentários impróprios na web
                                <Card.Subtitle>Bibliotecas e SGBDs:</Card.Subtitle>                    
                                    scikit learn, pandas, numpy, Oracle, SQL Server e PostgreSQL
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className='indiv-card'>
                            <Card.Body>
                                <div className='icon' >
                                    <AnimatedIcon icon={Icon3}/>
                                </div> 
                                <Card.Title>Estudante</Card.Title>
                                <Card.Text>
                                    Ao longo da vida, tenho estudado uma série de outras coisas
                                <Card.Subtitle>Idiomas:</Card.Subtitle>
                                Português e Inglês
                                <Card.Subtitle>Outras tecnologias:</Card.Subtitle>                    
                                    Pytest (testes funcionais),
                                    Docker e virtualenv (DevOps) e
                                    Git (versionamento)
                                <Card.Subtitle>Algoritmos de ML:</Card.Subtitle> 
                                    Naive Bayes, Árvore de Decisão, Regressão Linear, entre outros
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
