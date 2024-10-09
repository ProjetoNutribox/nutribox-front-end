
import React, { ChangeEvent, useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import Usuario from '../../models/Usuario'

import { cadastrarUsuario } from '../../services/Service'

import './Cadastro.css'
 
function Cadastro() {
 
  const navigate = useNavigate()
 
  const [confirmaSenha, setConfirmaSenha] = useState<string>("")
 
  const [usuario, setUsuario] = useState<Usuario>({

    id: 0,

    nome: '',

    email: '',

    senha: '',

    foto: ''

  })
 
  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({

    id: 0,

    nome: '',

    email: '',

    senha: '',

    foto: ''

  })
 
  useEffect(() => {

    if (usuarioResposta.id !== 0) {

      back()

    }

  }, [usuarioResposta])
 
  function back() {

    navigate('/login')

  }
 
  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {

    setConfirmaSenha(e.target.value)

  }
 
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

    setUsuario({

      ...usuario,

      [e.target.name]: e.target.value

    })

  }
 
  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {

    e.preventDefault()
 
    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
 
      try {

        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)

        alert('Usuário cadastrado com sucesso')
 
      } catch (error) {

        alert('Erro ao cadastrar o Usuário')

      }
 
    } else {

      alert('Dados inconsistentes. Verifique as informações de cadastro.')

      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha

      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha

    }

  }
 
  return (

    <>
 <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center font-bold container mx-auto my-16 px-4">
      <div className="fundoCadastro  flex items-center justify-center">
      </div>

      <form
        className="flex flex-col w-full max-w-md gap-10 my-10"
        onSubmit={cadastrarNovoUsuario}
      >
        <div className='flex justify-center text-2xl md:text-3xl lg:text-5xl gap-10 text-center'>
            <Link to="/login">
              <h2 className="font-light login-titulo hover:text-sky-800">Login</h2>
            </Link>
            <span className='text-2xl md:text-3xl lg:text-4xl font-light login-titulo'>|</span>
            <Link to="/cadastro">
              <h2 className="font-light login-titulo hover:text-sky-800">Cadastrar</h2>
            </Link>
          </div>

        <div className="flex flex-col w-full">
          <label htmlFor="nome" className="text-[#16171B] pb-4">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
            value={usuario.nome}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" className="text-[#16171B] pb-4">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
            value={usuario.email}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="foto" className="text-[#16171B] pb-4">
            Foto
          </label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="Foto"
            className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
            value={usuario.foto}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="senha" className="text-[#16171B] pb-4">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
            value={usuario.senha}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="confirmarSenha" className="text-[#16171B] pb-4">
            Confirmar Senha
          </label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
            value={confirmaSenha}
            onChange={handleConfirmarSenha}
          />
        </div>

        <div className="flex justify-between w-full gap-4">
          <button
            className="rounded-xl bg-[#FB7F01] hover:bg-[#E03401] w-full py-4 flex justify-center font-normal text-xl text-[#FFFFFF]"
            onClick={back}
          >
            Cancelar
          </button>
          <button
            className="rounded-xl bg-[#365314] hover:bg-[#538d22] w-full py-4 flex justify-center font-normal text-xl text-[#FFFFFF]"
            type="submit"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>

    </>

  )

}
 
export default Cadastro
