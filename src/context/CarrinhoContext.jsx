import { createContext, useState } from 'react';

const CarrinhoContext = createContext();

const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export { CarrinhoContext, CarrinhoProvider };
