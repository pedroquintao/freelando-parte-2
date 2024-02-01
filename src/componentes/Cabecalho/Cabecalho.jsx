import styled from "@emotion/styled"
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

export const Cabecalho = ({children}) => {
    
    
    return (
        <DivCabecalho>
            {children}
        </DivCabecalho>
    )
}