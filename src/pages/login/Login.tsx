import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContexts';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import { cadastrar } from '../../services/Service';
import imageLogin from '../../assets/imageLogin.png'


function Login() {
  const navigate = useNavigate();
//Declara um estado local usuarioLogin como um objeto do tipo UsuarioLogin, inicializando-o como um objeto vazio.
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(//é a mesma coisa que está no cadastro , porém o react faz automatico , ele cria um objeto que é do tipo UsuarioLogin da model, com os campos que tem lá , todos incializados como vazio.
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);
// Usa o hook useContext para obter o estado isLoading do contexto de autenticação, que indica se uma operação de login está em andamento
  const {isLoading} = useContext(AuthContext) 

  // redirecionar o usuário para a página '/home' se ele já estiver logado (token não vazio)
  useEffect(() => {
    if (usuario.token !== "") {
        navigate('/home')
    }
}, [usuario])

//Define uma função para atualizar o estado usuarioLogin com base nos valores dos campos de entrada (inputs) do formulário.
function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
  setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
  })
}
//Define uma função para lidar com o envio do formulário, evitando o comportamento padrão do formulário
// (recarregar a página) e chamando a função handleLogin com os dados do usuário.
function login(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault()
  handleLogin(usuarioLogin)
}
return (
  <>
    <div className="   place-items-center font-bold  body flex flex-col">

    

<div className='grid  grid-cols-2 gap-2 '>

<div className=' object-scale-down px-20' >
<img src={imageLogin} alt="" />
</div>

      <form className="flex justify-center items-center flex-col  gap-10 form mb-36 px-16 " onSubmit={login}>

      <div className='flex  gap-10'>

<h2 className="   text-5xl   font-light login-titulo">Login</h2>
<span className='text-4xl font-light login-titulo'>|</span>
<h2 className="   text-5xl font-light login-titulo ">Cadastrar</h2>
</div>
    
        <div className="flex flex-col w-full ">
          <label htmlFor="email" className='text-[#16171B] pb-4 '>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
            value={usuarioLogin.email} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          </div>
            <div className="flex flex-col w-full">
              <label htmlFor="senha" className='text-[#16171B] pb-4 '>Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
                value={usuarioLogin.senha} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
              </div>
            <button  type='submit' className="rounded-xl color-button   bg-[#FB7F01]  w-1/4 py-4 flex justify-center font-normal text-xl text-[#FFFFFF]">
             {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"//icone de carregamento
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
              <span >Entrar</span>}
            </button>
  
            <hr className="border-slate-800 w-full" />
  
            <p className='text-[#16171B] font-medium'>
              Ainda não tem uma conta?{' '}
              <Link to="/cadastro" className=" hover:text-[#023e8a]  underline">
                Cadastre-se
              </Link>
            </p>
          </form>
          
         
          
        </div>
        </div>
      </>
    );
  }
  
  export default Login;