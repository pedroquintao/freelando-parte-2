import { Col, Row } from "react-grid-system"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import cliente from './assets/cliente.png'
import freelancer from './assets/freela.png'



const SelecaoDoCliente = () => {
    return (<>
        <Tipografia componente="h1" variante="h1">
                Crie seu cadastro
        </Tipografia>
        <Tipografia componente="h2" variante="h3">
                Como podemos ajudar?
        </Tipografia>
        <Row>
            <Col md={6} sm={12}>
                <img src={cliente} alt="" />
            </Col>
            <Col md={6} sm={12}>
                <img src={freelancer} alt="" />
            </Col>
        </Row>
    </>)
}

export default SelecaoDoCliente