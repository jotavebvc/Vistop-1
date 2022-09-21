
import React from 'react';
import ReactDOM from 'react-dom';
import 'Scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from 'Components/Header.js'
import HomeOperador from 'Pages/HomeOperador.js'
import Login from 'Pages/Login.js'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BottomBar from './components/BottomBar';
import RotasAbertas from './pages/RotasAbertas';
import RotasFechadas from './pages/RotasFechadas';
import RotaEscolhida from 'Pages/RotaEscolhida.js';
import Agenda from 'Pages/Agenda.js';
import Processos from 'Pages/Processos.js';
import Produtos from 'Pages/Produtos.js';
import HomeAdm from 'Pages/HomeAdm.js';
import AgendaAdm from 'Pages/AgendaAdm.js';
import CadastroFuncionario from 'Pages/CadastroFuncionario.js';
import CadastroCliente from 'Pages/CadastroCliente.js';
import AgendaOperadoresAdm from 'Pages/AgendaOperadoresAdm.js';
import CadastroProduto from 'Pages/CadastroProduto.js';
import CadastroVistoria from 'Pages/CadastroVistoria.js';
import NaoConcluidas from 'Pages/NaoConcluidas.js';
import CadastroFolgas from 'Pages/CadastroFolgas.js';
import CadastroSetores   from 'Pages/CadastroSetores.js';
import ConsultaClientes from 'Pages/ConsultaClientes.js';
import ConsultaProduto from 'Pages/ConsultaProduto.js';
import ConsultaFuncionario from 'Pages/ConsultaFuncionario.js';
import ConsultaVistoria from 'Pages/ConsultaVistoria.js';
import ConsultaSetores from 'Pages/ConsultaSetores.js';






const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='media-option' style={{
        height: '850px',
      }

        // overflowY: 'auto'
      }>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="home-operador" element={<HomeOperador />} />
            <Route path="rotas-fechadas" element={<RotasFechadas />} />
            <Route path="rotas-abertas" element={<RotasAbertas />} />
            <Route path="rota-escolhida" element={<RotaEscolhida />} />
            <Route path="agenda" element={<Agenda />} />
            <Route path="processos" element={<Processos />} />
            <Route path="produtos" element={<Produtos />} />
            <Route path="home-adm" element={<HomeAdm />} />
            <Route path="agenda-adm" element={<AgendaAdm />} />
            <Route path="cadastro-funcionario" element={<CadastroFuncionario />} />
            <Route path="agenda-operadores" element={<AgendaOperadoresAdm />} />
            <Route path="cadastro-cliente" element={<CadastroCliente />} />
            <Route path="cadastro-produto" element={<CadastroProduto />} />
            <Route path="cadastro-vistoria" element={<CadastroVistoria />} />
            <Route path="nao-concluidas" element={<NaoConcluidas />} />
            <Route path="cadastro-folgas" element={<CadastroFolgas />} />
            <Route path="cadastro-setores" element={<CadastroSetores />} />
            <Route path="consulta-clientes" element={<ConsultaClientes />} />
            <Route path="consulta-produto" element={<ConsultaProduto />} />
            <Route path="consulta-funcionario" element={<ConsultaFuncionario />} />
            <Route path="consulta-vistoria" element={<ConsultaVistoria />} />
            <Route path="consulta-setores" element={<ConsultaSetores />} />


            {/* <Route path='/google-maps' component={() => {
              window.location.href = 'https://www.google.com.br/maps';
              return null;
            }} /> */}
          </Routes>
        </div>
        <BottomBar />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 //onClick={goCadastroFuncionario}
 //onClick={goToRotasAbertas} />
 //onClick={goToHomeOperador}
 //onClick={goToLogin}