import styled from "@emotion/styled";
import logoBranco from "../../assets/Logo branco.svg";
import FreelandoLogo from "../Icones/FreelandoLogo";
import { IconeInstagram } from "../Icones/IconeInstagram";
import { IconeTwitch } from "../Icones/IconeTwitch";
import { IconeTwitter } from "../Icones/IconeTwitter";
import { IconeWhatsApp } from "../Icones/IconeWhatsApp";
import { Col, Container, Row } from "react-grid-system";

const DivRodape = styled.footer`
  /* display: flex;
    flex-direction: column;
    justify-content: start; */
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.xl} 120px;
  color: ${(props) => props.theme.cores.branco};
`;

const DivRedesSociais = styled.div`
    display: flex;
    align-items: right;
`;

export const Rodape = () => {
  return (
    <DivRodape>
      <Container>
        <Row justify="between">
          <Col lg={6}>
            <img src={logoBranco} />
            <p>Desenvolvido por Alura, projeto fictício sem fins comerciais</p>
          </Col>
          <Col lg={3}>
            <p style={{ marginBottom: `${(props) => props.theme.espoacamentos.s}`}}>Acesse nossa redes:</p>
            <DivRedesSociais>
                <IconeInstagram />
                <IconeTwitch />
                <IconeTwitter />
                <IconeWhatsApp />
            </DivRedesSociais>
          </Col>
        </Row>
      </Container>
    </DivRodape>
  );
};
