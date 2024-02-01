import { createBrowserRouter } from "react-router-dom";
import PaginaInicial from "../paginas/PaginaInicial";
import SelecaoDoCliente from "../paginas/cadastro/SelecaoDoCliente";
import LayoutBaseDeCadastro from "../paginas/cadastro/LayoutBaseDeCadastro";
import LayoutBase from "../paginas/LayoutBase";

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
          path: 'cliente',
          element: <h1>Insteresses</h1>
        },
        {
          path: 'dados-pessoais',
          element: <h1>Dados Pessoais</h1>
        },
        {
          path: 'concluido',
          element: <h1>Concluído!</h1>
        }]
      }
    ],
  },
]);
