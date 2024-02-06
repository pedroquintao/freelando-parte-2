import { createBrowserRouter } from "react-router-dom";
import PaginaInicial from "../paginas/PaginaInicial";
import SelecaoDoCliente from "../paginas/cadastro/SelecaoDoCliente";
import LayoutBaseDeCadastro from "../paginas/cadastro/LayoutBaseDeCadastro";
import LayoutBase from "../paginas/LayoutBase";
import Interesse from "../paginas/cadastro/Interesses";
import DadosPessoais from "../paginas/cadastro/DadosPessoais";

export const router = createBrowserRouter ([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        path: 'cadastro',
        element:  <LayoutBaseDeCadastro />,
        children: [
        {
          path: '',
          element: <SelecaoDoCliente />
        },
        {
          path: 'interesses',
          element: <Interesse />
        },
        {
          path: 'dados-pessoais',
          element: <DadosPessoais />
        },
        {
          path: 'concluido',
          element: <h1>Concluído!</h1>
        }]
      }
    ],
  },
]);
