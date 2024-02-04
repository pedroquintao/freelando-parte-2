import styled from "@emotion/styled";
import { Tipografia } from "../Tipografia/Tipografia";
import { useState } from "react";


const DivEstilizada = styled.div`
    display: flex;
    `
const InputRadio = styled.input`
    width: 36px;
    height: 36px;
    border-radius: 36px;
    background-color: ${props => props.selecionado? props.theme.cores.primaria.a : props.theme.cores.primaria.b};
    &:hover {
        border-color: red;
    }
    `

const BotaoRadio = ({ texto }) => {

    const [selecionado, setSelecionado] = useState(false)
    
    return (<DivEstilizada>
                <InputRadio onClick={() => {console.log('SELECIONADO:', selecionado); setSelecionado(!selecionado)}}/>
                <Tipografia variante='body' componente='body' >
                    {texto}
                </Tipografia>
            </DivEstilizada>) 
}

export default BotaoRadio;