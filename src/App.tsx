import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Sobre from './pages/sobreNos/Sobre';
import Catalogo from './pages/catalogo/Catalogo';

function App() {
  return (
    <>
  
    <Navbar/>
    <Home/>
    <Sobre/>
    <Catalogo/>
    <Footer/>
    
    
 
    </>
);
}
export default App;
