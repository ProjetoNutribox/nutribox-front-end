import Categoria from "./Categoria";

export default interface Produto {
    id: number;
    nome: string;
    tamanho: string;
    preco: number;
    quantidade: number;
    foto: string;
    categoria: Categoria| null;
    qtd?: number
  }