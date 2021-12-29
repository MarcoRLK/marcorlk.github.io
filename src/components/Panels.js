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
                    <SkillCard title="🧑‍💻 Boa base de programação"
                                item1="Bacharel em Engenharia de Software pela Universidade de Brasília (2/2019)"
                                item2="Aluno destaque dentre os formandos"
                                item3="Principal linguagem: Python"
                                item4="Familiaridade com: Java, C, R, Javascript"
                                link1="Github"
                                link2="Exemplo de projeto"
                    />
                </div>
                <div className='single-reason'>
                    <SkillCard title="🎲 Experiência com manipulação de dados e Machine Learning"
                                item1="Estágio no Tribunal de Contas da União (TCU). Trabalhos com Oracle, SQL Server e R."
                                item2="TCC sobre técnicas de Machine Learning e Processamento de linguagem Natural na identificação de comentários impróprios na web."
                                item3="Familiaridade com: scikit learn, pandas, numpy"
                                link1="certificado 1: aprendizagem supervisionada"
                                link2="certificado 2: aprendizagem não-supervisionada"
                    />
                </div>
                <div className='single-reason'>
                    <SkillCard title="🧮 Boa base de Probabilidade e Estatística"
                                item1="Matérias regulares da Engenharia como: Cálculo 1 e 2, Métodos Numéricos, Estruturas Matemáticas para computação, Álgebra Linear, entre outras"
                                item2="Conhecimento sobre os algoritmos comumente usados em ML: Naive Bayes, Árvore Binária, Regressão Linear, entre outros"
                                link1="Meu artigo 1"
                                link2="Meu artigo 2"
                    />
                </div>
                <div className='single-reason'>
                <SkillCard title="⭐ Diversos"
                                item1="Inglês fluente"
                                item2="Familiaridade com diversas metodologias de desenvolvimento (ágeis, RUP, etc)"
                                item3="Testes (Pytest)"
                                item4="DevOps (Docker)"
                                link1="Meu artigo 2"
                    />
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
