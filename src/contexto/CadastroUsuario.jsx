import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const usuarioInicial = {
    perfil: '',
    interesse: '',
    nomeCompleto: '',
    uf: '',
    cidade: '',
    email: '',
    senhaConfirmada: ''
}

export const CadastroUsuarioContext = createContext({
    usuario: usuarioInicial,
    setPerfil: () => null,
    setInteresse: () => null,
    setNomeCompleto: () => null,
    setUf: () => null,
    setCidade: () => null,
    setEmail: () => null,
    setSenha: () => null,
    setSenhaConfirmada: () => null,
    submeterUsuario: () => null,
    possoSelecionarInteresse: () => null
})

export const useCadastroUsuarioContext = () => {
    return useContext(CadastroUsuarioContext);
}

export const CadastroUsuarioProvider = ({ children }) => {
    
    const navegar = useNavigate();

    const [usuario, setUsuario] = useState(usuarioInicial)

    const setPerfil = (perfil) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                perfil
            }
        })
    }
    const setInteresse = (interesse) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                interesse
            }
        })
    }
    const setNomeCompleto = (nomeCompleto) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                nomeCompleto
            }
        })
    }
    const setUf = (uf) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                uf
            }
        })
    }
    const setCidade = (cidade) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                cidade
            }
        })
    }
    const setEmail = (email) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                email
            }
        })
    }
    const setSenha = (senha) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senha
            }
        })
    }
    const setSenhaConfirmada = (senhaConfirmada) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senhaConfirmada
            }
        })
    }

    const submeterUsuario = () => {
        console.log(usuario)
        navegar('/cadastro/concluido')
    }

    const possoSelecionarInteresse = () => {
        return !!usuario.perfil //Esses dois !! são utilizados somente para converter usuario.perfil em booleano
    }

const contexto = {
    usuario,
    setPerfil,
    setInteresse,
    setNomeCompleto,
    setUf,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
    submeterUsuario,
    possoSelecionarInteresse
}

    return (
        <CadastroUsuarioContext.Provider value={contexto}>
            {children}
        </CadastroUsuarioContext.Provider>
    )
}