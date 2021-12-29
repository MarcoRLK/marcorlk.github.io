import React from 'react'
import './Panels.css'
import SkillCard from './SkillCard'

function Panels() {
    return (
        <div className='card-box'>
            <div className='title-reasons'>
                <h2>Conheça um pouco sobre mim e meus projetos</h2>
            </div>

            <div className='reasons'>
                <div className='single-reason'>
                    <SkillCard title="🧑‍💻 Boa base de programação"
                                image="https://wp-media.petersons.com/blog/wp-content/uploads/2017/12/10124351/luca-bravo-217276-unsplash.jpg"
                                item1="Bacharel em Engenharia de Software pela Universidade de Brasília (2/2019)"
                                item2="Aluno destaque dentre os formandos"
                                item3="Principal linguagem: Python"
                                item4="Familiaridade com: Java, C, R, Javascript"
                                link1="Github"
                                link2="Exemplo de projeto"
                    />
                </div>
                <div className='single-reason'>
                    <SkillCard title="🎲 Experiência com Banco de Dados, manipulação de dados e Machine Learning"
                                image="https://cdn.corporatefinanceinstitute.com/assets/database-1024x703.jpeg"
                                item1="Estágio no Tribunal de Contas da União (TCU). Trabalhos com Oracle, SQL Server e R"
                                item2="TCC sobre técnicas de ML e PLN na identificação de comentários impróprios na web"
                                item3="Familiaridade com: scikit learn, pandas, numpy"
                                link1="Certificado: aprendizagem supervisionada"
                                link2="Certificado: aprendizagem não-supervisionada"
                    />
                </div>
                <div className='single-reason'>
                    <SkillCard title="🧮 Boa base de Probabilidade e Estatística"
                                image="https://cdn.analyticsvidhya.com/wp-content/uploads/2019/09/introduction-to-probability-and-statistics-for-epidemiology_HRP259.jpg"
                                item1="Cursos regulares da Engenharia como: Cálculo 1 e 2, Métodos Numéricos, Probabilidade e Estatística, Álgebra Linear, etc"
                                item2="Conhecimento sobre algoritmos comumente usados em ML como: Naive Bayes, Árvore de Decisão, Regressão Linear, entre outros"
                                link1="Meu artigo 1"
                                link2="Meu artigo 2"
                    />
                </div>
                <div className='single-reason'>
                <SkillCard title="⭐ Diversos"
                                image="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-947663966-e1621956778415.jpg?fit=750%2C380&strip=all"
                                item1="Inglês fluente"
                                item2="Familiaridade com diversas metodologias de desenvolvimento (ágeis, RUP, etc)"
                                item3="Testes (Pytest)"
                                item4="DevOps (Docker)"
                                link1="Documentação CRP"
                                link2="Documentação Drogaria Ideal"
                    />
                </div>
            </div>
        </div>
    )
}

export default Panels
