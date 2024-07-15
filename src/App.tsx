import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Catalogo from './pages/catalogo/Catalogo';
import Sobre from './pages/sobreNos/Sobre';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContexts';
import Perfil from './pages/perfil/Perfil';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import { ToastContainer } from 'react-toastify';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ListaProdutos from './components/Produtos/listaProdutos/ListaProdutos';
import FormularioProduto from './components/Produtos/formularioProduto/FormularioProduto';
import DeletarProduto from './components/Produtos/deletaProdutos/DeletaProdutos';
import { CarrinhoProvider } from './contexts/CarrinhoContext';
import Carrinho from './components/carrinho/Carrinho';

function App() {
  return (
    <>
    <AuthProvider>
    <CarrinhoProvider>
    <ToastContainer />
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/sobreNos" element={<Sobre />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path='/categorias' element={<ListaCategorias/>} />
              <Route path='/cadastrarCategoria' element={<FormularioCategoria/>} />
              <Route path='/editarCategoria/:id' element={<FormularioCategoria/>} />
              <Route path='/deletarCategoria/:id' element={<DeletarCategoria/>} />
              <Route path='/produtos' element={<ListaProdutos/>} />
              <Route path='/cadastrarProdutos' element={<FormularioProduto/>} />
              <Route path='/editarProduto/:id' element={<FormularioProduto/>} />
              <Route path='/deletarProduto/:id' element={<DeletarProduto/>} />
              <Route path='/carrinho' element={<Carrinho/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </CarrinhoProvider>
        </AuthProvider>
    </>
);
}
export default App;