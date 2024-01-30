import styled from "@emotion/styled"

const componentes = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    bodyBold: 'strong',
    body2: 'p',
    body2Bold: 'strong',
    legenda: 'p'
}

const estilos = {
    h1: `
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
    `,
    h2: `
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
    `,
    h3: `
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
    `,

    body: `
        font-size: 20px;
        font-weight: 400;
        line-height: 24px; 
    `,
    bodyBold: `
        font-size: 20px;
        font-weight: 700;
        line-height: 24px; 
    `,    
    body2: `
        font-size: 16px;
        font-weight: 400;
        line-height: normal; 
    `,
    body2Bold: `
        font-size: 16px;
        font-weight: 700;
        line-height: 20px; 
    `,
    legenda: `
        font-size: 14px;
        font-weight: 400;
        line-height: 17px; 
    `
}
export const Tipografia = ({ variante, componente, children}) => {
    const tag = componentes[componente]
    const ComponenteUtilizado = styled[tag]`${estilos[variante]}`

    return (
        <ComponenteUtilizado>
            { children }
        </ComponenteUtilizado>)
}