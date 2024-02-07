import { useState } from "react"
import GrupoRadio from "../../componentes/Radio/GrupoRadio"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { Col, Row } from "react-grid-system"
import { Botao } from "../../componentes/Botao/Botao"
import { Link } from "react-router-dom"

const opcoes = [
    {
        valor: 1,
        label: 'TI e Programação',
    },
    {
        valor: 2,
        label: 'Design e Multimídia',
    },
    {
        valor: 3,
        label: 'Revisão',
    },
    {
        valor: 4,
        label: 'Tradução',
    },
    {
        valor: 5,
        label: 'Transcrição',
    },
    {
        valor: 6,
        label: 'Marketing',
    },
]


const Interesse = () => {

    const [opcao, setOpcao] = useState('')

    return (<div style={{textAlign: 'center'}}>
        <Tipografia componente="h1" variante="h1">
                Crie seu cadastro
        </Tipografia>
        <Tipografia componente="h3" variante="h2">
                Qual a área de interesse?
        </Tipografia>
        <GrupoRadio opcoes={opcoes} valor={opcao} onChange={setOpcao}/>
        <Row>
            <Col lg={6} md={6} sm={6}>
                <Link to={'/cadastro'}>
                    <Botao variante="secundario">
                        Anterior
                    </Botao>
                </Link>
            </Col>
            <Col lg={6} md={6} sm={6}>
                    <Link to='/cadastro/dados-pessoais'>
                        <Botao>
                            Proxima
                        </Botao>
                    </Link>
            </Col>
        </Row>
    </div>)
}

export default Interesse