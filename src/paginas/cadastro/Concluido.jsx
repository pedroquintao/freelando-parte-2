import styled from "@emotion/styled"
import { Botao } from "../../componentes/Botao/Botao"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import clienteConcluido from './assets/cliente-concluido.png'
import { Col, Row } from "react-grid-system"
import { Link } from "react-router-dom"

const ImagemEstilizada = styled.img`
    max-width: 100%;
    border-radius: 16px;
`

const Concluido = () => {
    return(
    <>
        <div style={{textAlign: 'center'}}>
            <Tipografia componente="h1" variante="h1">
                Seu perfil está completo!
            </Tipografia>
            <Tipografia componente="h3" variante="h3">
                Agora é só começar a conectar com os melhores freelancers do mercado!
            </Tipografia>
        </div>
        <figure>
            <ImagemEstilizada src={clienteConcluido} />
        </figure>
        <Row justify="center">
            <Col lg={6} md={6} sm={6} style={{textAlign: 'center'}}>
                <Link to='/cadastro'>
                    <Botao variante="secundario">Voltar ao home</Botao>
                </Link>
            </Col>
        </Row>
    </>)
}

export default Concluido