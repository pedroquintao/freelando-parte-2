import { Col, Container, Row } from "react-grid-system"
import { Link } from "../componentes/Link/Link"
import { Cabecalho } from "../componentes/Cabecalho/Cabecalho"
import { FreelandoLogo } from "../componentes/Icones/FreelandoLogo"
import { Rodape } from "../componentes/Rodape/Rodape"
import { Outlet } from "react-router-dom"

const LayoutBase = () => {
    return (
    <>
        <Cabecalho>
            <Container>
                <Row align="center" justify="between">
                    <Col lg={4} md={4} sm={4}>
                        <FreelandoLogo />
                    </Col>
                    <Col style={{textAlign: 'right'}} lg={3} md={3} sm={3}>
                        <Link>Login</Link>
                    </Col>
                </Row>
            </Container>
        </Cabecalho>
        <Container>
            <Outlet />
        </Container>
        <Rodape />
    </>
    )
}

export default LayoutBase