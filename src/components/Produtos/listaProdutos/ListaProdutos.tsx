import { useContext, useEffect, useState } from "react";
import Produto from '../../../models/Produto';
import { AuthContext } from "../../../contexts/AuthContexts";
import { Link, useNavigate } from "react-router-dom";
import { toastAlerta } from "../../../util/toastAlert";
import { Dna } from "react-loader-spinner";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardProduto/CardProduto";

function ListaProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');


    const navigate = useNavigate();
  
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProdutos() {
        try {
          await buscar('/produtos', setProdutos, {
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
        buscarProdutos();
      }, [produtos.length]);
    
      const filteredProdutos = produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );


  return (
    <>
      {produtos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

<div className="flex flex-col justify-center container mx-auto mb-10">
               
                <div className="container flex flex-col my-10 mx-auto w-1/2">
                    
                        <input
                            type="text"
                            placeholder="Buscar produto..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-4 border-2 pl-10 rounded-full mb-4 bg-[#e9f5db] placeholder-lime-900"
                        />
                    </div>
                    <div className="flex gap-8">
                    <div>
                  <Link to='/categorias'>
                  <button className='border rounded-xl px-8 py-2 bg-gray-200 hover:bg-white hover:text-black'>Categorias</button>
                  </Link>
                </div>
                      <Link to='/cadastrarProdutos'>
                      <button className='border rounded-xl px-12 py-2 bg-gray-200 hover:bg-white hover:text-black '>Novo +</button>
                      </Link>
                      
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-8">
                        {filteredProdutos.map((produto) => (
                            <CardProduto key={produto.id} produto={produto} />
                        ))}
                    </div>
                </div>
            




    
    </>
  )
}

export default ListaProdutos