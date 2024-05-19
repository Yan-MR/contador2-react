import React, { useState } from 'react';
import './App.css';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="contador"> {/* Adicione a classe 'contador' aqui */}
      <h2>Contador</h2>
      <p className="valor">Valor: {contador}</p> {/* Adicione a classe 'valor' aqui */}
      <button className="botao" onClick={incrementar}>Incrementar</button> {/* Adicione a classe 'botao' aqui */}
      <button className="botao decrementar" onClick={decrementar}>Decrementar</button> {/* Adicione as classes 'botao' e 'decrementar' aqui */}
    </div>
  );
}

export default Contador;
