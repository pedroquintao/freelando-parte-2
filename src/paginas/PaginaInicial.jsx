import { Cabecalho } from "../componentes/Cabecalho/Cabecalho";
import { CampoTexto } from "../componentes/CampoTexto/CampoTexto";
import { ListaSuspensa } from "../componentes/ListaSuspensa/ListaSuspensa";
import { Card } from "../componentes/Card/Card";
import { Estilos } from "../componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "../componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "../componentes/Tipografia/Tipografia";
import { Rodape } from "../componentes/Rodape/Rodape";
import { Botao } from "../componentes/Botao/Botao";
import { Col, Container, Row } from "react-grid-system";
import { FreelandoLogo } from "../componentes/Icones/FreelandoLogo";
import { Link } from "../componentes/Link/Link";

const PaginaInicial = () => {
  return (
    <ProvedorTema>
      <Estilos />
      <Container style={{ margin: '80px 0'}}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia componente="h1" variante="h1">
                Freelando
              </Tipografia>
              
              
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Botao variante="secundaria">Anterior</Botao>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: 'right' }}>
                    <Botao variante="primaria">Próximo</Botao>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </ProvedorTema>
  );
}

export default PaginaInicial;