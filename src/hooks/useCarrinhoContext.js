import { useContext } from 'react';
import { CarrinhoContext } from '@/context/CarrinhoContext';

const useCarrinhocontext = () => {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  const mudarQuantidade = (id, quantidade) => {
    return carrinho.map((item) => {
      if (item.id === id) item.quantidade += quantidade;
      return item;
    });
  };

  const adicionarProduto = (novoProduto) => {
    const hasProduct = carrinho.some((item) => item.id === novoProduto.id);

    if (!hasProduct) {
      novoProduto.quantidade = 1;
      return setCarrinho((previousState) => [...previousState, novoProduto]);
    }

    const carrinhoAtualizado = mudarQuantidade(novoProduto.id, 1);

    setCarrinho([...carrinhoAtualizado]);
  };

  const removerProduto = (id) => {
    const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);
    const ehOUltimo = produto.quantidade === 1;
    if (ehOUltimo) {
      return setCarrinho((carrinhoAnterior) =>
        carrinhoAnterior.filter((itemDoCarrinho) => itemDoCarrinho.id !== id)
      );
    }

    const carrinhoAtualizado = mudarQuantidade(id, -1);

    setCarrinho([...carrinhoAtualizado]);
  };

  const removerProdutoCarrinho = (id) => {
    const carrinhoAtualizado = carrinho.filter((item) => item.id !== id);
    setCarrinho(carrinhoAtualizado);
  };

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
  };
};

export default useCarrinhocontext;
