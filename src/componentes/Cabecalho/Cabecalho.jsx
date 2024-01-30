import styled from "@emotion/styled"
import logoBranco from "../../assets/Logo branco.svg"
import { Col, Container, Row } from "react-grid-system";
import { FreelandoLogo } from "../Icones/FreelandoLogo";

    const DivCabecalho = styled.header`
        /* display: flex; */
        background-color: ${prop => prop.theme.cores.primarias.a};
        padding: 24px 120px;
    `

    const Login = styled.a`
        font-size: 20px;
        color: ${prop => prop.theme.cores.secundarias.a};
        cursor: pointer;
    `

export const Cabecalho = () => {
    
    
    return (
        <DivCabecalho>
            <Container>
                <Row align="center" justify="between">
                    <Col lg={4} md={4} sm={4}>
                        <FreelandoLogo />
                    </Col>
                    <Col style={{textAlign: 'right'}} lg={3} md={3} sm={3}>
                        <Login>Login</Login>
                    </Col>
                </Row>
            </Container>
        </DivCabecalho>
    )
}