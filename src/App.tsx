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
import FormularioCategoria from './components/categorias/listaCategorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';

function App() {
  return (
    <>
    <AuthProvider>
    <ToastContainer />
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Sobre />} />
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
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
);
}
export default App;