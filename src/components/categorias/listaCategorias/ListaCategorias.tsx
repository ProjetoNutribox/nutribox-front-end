import React, { useContext, useEffect, useState } from 'react'
import Categoria from '../../../models/Categoria';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContexts';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlert';
import { Dna } from 'react-loader-spinner';
import CardCategoria from '../cardCategoria/CardCategoria';





function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');


    const navigate = useNavigate();
  
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarCategorias() {
        try {
          await buscar('/categorias', setCategorias, {
            headers: { Authorization: token },
          });
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente', 'info')
            handleLogout()
          }
        }
      }


      useEffect(() => {
        if (token === '') {
          toastAlerta('Você precisa estar logado', 'info');
          navigate('/login');
        }
      }, [token]);

      useEffect(() => {
        buscarCategorias();
      }, [categorias.length]);

      const filteredCategorias = categorias.filter((categoria) =>
        categoria.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
    

  return (
    <>
       {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )} 



      
<div className="flex flex-col justify-center w-full mb-10  ">
        <div className="container flex flex-col my-10 mx-auto w-1/2">
        
          <input
            type="text"
            placeholder= " Buscar categoria..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-4 border-2   rounded-full mb-4 bg-[#e9f5db] placeholder-lime-900  "
          />
         
        </div>
        <div className='flex container ml-10'>
          <Link to='/cadastrarCategoria' >
               <button className='border rounded-xl px-12 py-2 bg-gray-200 hover:bg-white hover:text-black '>Novo +</button>
          </Link>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-auto container gap-10" >

            {filteredCategorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} foto={'https://i.ibb.co/M6TRbrz/box-outono.jpg'} />
            ))}
          </div>
      </div>


      
    
    </>
  )
}

export default ListaCategorias