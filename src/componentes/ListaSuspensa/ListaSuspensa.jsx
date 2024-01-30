import styled from "@emotion/styled"
import { useState } from "react"

const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    position: relative;

`

const BotaoEstilizado = styled.button`
    cursor: pointer;
    display: block;
    height: 40px;
    width: 100%;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.estaAberta ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.estaAberta ? '0' : '18px'};
    margin-top: ${props => props.theme.espacamentos.xs};
    padding: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.branco};
    border: 1px solid ${props => props.theme.cores.neutras.a};
    &:focus {
        border-color: ${props => props.theme.cores.focus};
    }
`

const ListaSuspensaEstilizada = styled.ul`
    display: block;
    width: 100%;
    padding: 0 16px;
    margin: 0;
    cursor: pointer;
    background-color: white;
    box-sizing: border-box;
    list-style: none;
    border-radius: 18px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border: 1px solid ${props => props.theme.cores.neutras.a};
    border-top: none;
    text-align: center;
    position: absolute;
    top: 100%;
    z-index: 1;
`

const OpcaoEstilizada = styled.li`
    font-size: 14px;
    padding: ${props => props.theme.espacamentos.xs} 0;
    border-bottom: 1px solid ${props => props.theme.cores.neutras.b};
    &:last-child {
        border: none;
    }
    color: ${props => props.focoAtivo ? props.theme.cores.focus : 'inherit'};
    &:hover {
        color: ${props => props.theme.cores.focus};
    }
`

export const ListaSuspensa = ({ titulo, opcoes }) => {
    const [estaAberta, alternarVisibilidade] = useState(false)
    
    const [opcaoFocada, setOpcaoFocada] = useState(null);

    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

    const manipularTeclaDotTeclado = (evento) => {
        alternarVisibilidade(true)
        switch (evento.key) {
            case 'ArrowDown':
                evento.preventDefault();
                setOpcaoFocada(focoAntigo => {
                    if (focoAntigo == null) {
                        return 0;
                    }
                    return focoAntigo !== opcoes.length - 1 ? focoAntigo += 1 : focoAntigo
                })
                break;

            case 'ArrowUp':
                evento.preventDefault();
                setOpcaoFocada(focoAntigo => {
                    if (!focoAntigo) {
                        return 0;
                    }
                    return focoAntigo -= 1
                })
                break;

            case 'Enter':
                evento.preventDefault();
                setOpcaoFocada(null);
                alternarVisibilidade(false)
                setOpcaoSelecionada(opcoes[opcaoFocada])
                break;
            
            case 'Tab':
            case 'Space':
                evento.preventDefault();
                setOpcaoFocada(null);
                alternarVisibilidade(false)
                setOpcaoSelecionada(null)
                break;
        
            default:
                break;
        }
    }

    return (<LabelEstilizada>
        {titulo}
        <BotaoEstilizado
             estaAberta={estaAberta}
             onClick={() => alternarVisibilidade(!estaAberta)}
             onKeyDown={manipularTeclaDotTeclado}
        >
            <div>
                {opcaoSelecionada ? opcaoSelecionada.text : 'Selecione'}
            </div>
            <div>
                <span>{estaAberta ? '▲' : '▼'}</span>
            </div>
        </BotaoEstilizado>
        {estaAberta && <ListaSuspensaEstilizada>
                {opcoes.map((opcao, index) => <OpcaoEstilizada key={opcao.value}
                                                               focoAtivo={index === opcaoFocada}
                                                               onClick={() => setOpcaoSelecionada(opcao)}>
                                                    {opcao.text}
                                              </OpcaoEstilizada>)}
        </ListaSuspensaEstilizada>}
    </LabelEstilizada>)
}