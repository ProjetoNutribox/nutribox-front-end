import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import "./ModalPerfil.css"
import 'reactjs-popup/dist/index.css';
import { atualizar, buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContexts';
import UsuarioLogin from '../../../models/UsuarioLogin';
import { toastAlerta } from '../../../util/toastAlert';
import { useNavigate } from 'react-router-dom';

interface MudarSenha {
    senha: string,
    confirmarSenha: string
}

function ModalPerfil() {
    
    const navigate = useNavigate()
    
    const [mudarSenha, setMudarSenha ] = useState<MudarSenha>({} as MudarSenha);
    const [senhaEditada, setSenhaEditada ] = useState(false);

    const [infosUsuario, setInfosUsuario ] = useState<UsuarioLogin>({} as UsuarioLogin);
    const {usuario} = useContext(AuthContext)
    
    async function pegarInfoUsuario() { 
          await  buscar(`/usuarios/${usuario.id}`, setInfosUsuario, {
                headers: { Authorization: usuario.token },
            })
    }

     async function submitSenha(e: ChangeEvent<HTMLInputElement>){
      e.preventDefault()
        infosUsuario.senha = mudarSenha.senha

        try {
           await atualizar("usuarios/atualizar", infosUsuario, setInfosUsuario, {
                headers: { Authorization: usuario.token },
            })
            setSenhaEditada(true)
        } catch (error) {
            alert(error)
        }
    }


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setMudarSenha({
            ...mudarSenha,
            [e.target.name]: e.target.value
        })
      }

    //verifica se a pessoa está com o token
      useEffect(() => {
        if (usuario.token === '') {
            toastAlerta('Você precisa estar logado', 'info');
            navigate('/login');
          }
      },[usuario.token])

      useEffect(() => {
        pegarInfoUsuario()
      }, [infosUsuario.id === 0])

    return (
        <>
          <Popup 
          trigger={<p className='ml-[825px] text-[#457D00] text-xl font-semibold hover:decoration-[#457D00] cursor-pointer '>mudar senha</p>} modal>
            <div>
            <div className='container flex flex-col items-center justify-center mx-auto'>
        <form onSubmit={() => submitSenha}className="w-1/2 flex flex-col gap-4 py-9" >
            <div className='flex flex-col gap-2'>
            <div className="flex flex-col w-full">
              <label htmlFor="senha" className='text-[#16171B] pb-4'>Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
                value={mudarSenha.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
              </div>
              <label htmlFor="senha" className='text-[#16171B] pt-2'>Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="border-2 border-solid border-[#16171B] rounded-2xl py-2 px-4 placeholder-[#756F6E] bg-transparent font-medium"
                value={mudarSenha.confirmarSenha} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            {mudarSenha.senha !== mudarSenha.confirmarSenha ? (<p className=' mx-auto text-[#E03401] p-5 font-semibold'>As senhas são diferentes</p>) : (<p></p>)}
            {senhaEditada && (<p className=' mx-auto text-[#161] font-semibold'>senha editada com sucesso</p>)}
            <button  type='submit' className="rounded-xl color-button mx-auto  bg-[#EB4901] hover:bg-[#FB7F01] p-4 flex justify-center font-normal text-xl text-[#FFFFFF]">enviar</button>
        </form>
            </div>
            </div>
          </Popup>
        </>
  )
}

export default ModalPerfil