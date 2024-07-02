import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContexts';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

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
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
      <form className="flex justify-center items-center flex-col w-1/2 gap-4 form" onSubmit={login}>
        <h2 className="   text-5xl ">Entrar</h2>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className='text-white '>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="border-2 border-t-white rounded p-2"
            value={usuarioLogin.email} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          </div>
            <div className="flex flex-col w-full">
              <label htmlFor="senha" className='text-white '>Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-white rounded p-2"
                value={usuarioLogin.senha} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
              </div>
            <button  type='submit' className="rounded color-button hover:bg-lime-700 bg-lime-900 w-1/2 py-2 flex justify-center">
             {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"//icone de carregamento
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
              <span>Entrar</span>}
            </button>
  
            <hr className="border-slate-800 w-full" />
  
            <p>
              Ainda não tem uma conta?{' '}
              <Link to="/cadastro" className=" hover:underline">
                Cadastre-se
              </Link>
            </p>
          </form>
          
          <div className="fundoLogin hidden lg:block"></div>
          
        </div>
      </>
    );
  }
  
  export default Login;