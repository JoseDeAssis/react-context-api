import React, { useContext } from 'react';
import Produto from './Produto';
import produtos from '@/mocks/produtos.json';
import Titulo from '@/components/Titulo';
import useCarrinhocontext from '@/hooks/useCarrinhoContext';

const Produtos = () => {
  const { adicionarProduto } = useCarrinhocontext();
  return (
    <section role="produtos" aria-label="Produtos que estão bombando!">
      <Titulo>Produtos que estão bombando!</Titulo>
      <div className="container row mx-auto">
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            {...produto}
            adicionarProduto={adicionarProduto}
          />
        ))}
      </div>
    </section>
  );
};

export default Produtos;
