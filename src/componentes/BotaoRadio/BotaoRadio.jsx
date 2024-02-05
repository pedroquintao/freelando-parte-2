import styled from "@emotion/styled";
import { Tipografia } from "../Tipografia/Tipografia";
import { useState } from "react";


// const DivEstilizada = styled.div`
//     display: flex;
//     `
// const InputRadio = styled.input`
//     width: 12px;
//     height: 12px;
//     border-radius: 36px;
//     background-color: ${props => props.selecionado? '#F00' : '#FFF'};
//     &:hover {
//         border-color: red;
//     }
//     &:focus {
//         border-color: red;
//     }
//     `
const DivEstilizada = styled.div`
display: flex;
`
const InputRadio = styled.input`
    appearance: none;
/* width: 12px;
height: 12px;
border-radius: 36px;
background-color: ${props => props.selecionado? '#F00' : '#FFF'};
&:hover {
    border-color: red;
}
&:focus {
    border-color: red;
} */
`


const BotaoRadio = ({ texto }) => {

    const [selecionado, setSelecionado] = useState(false)
    
    return (<DivEstilizada>
                <InputRadio type="radio" onClick={() => {console.log('SELECIONADO:', selecionado); setSelecionado(!selecionado)}}/>
                <Tipografia variante='body' componente='body' >
                    {texto}
                </Tipografia>
            </DivEstilizada>) 
}

export default BotaoRadio;