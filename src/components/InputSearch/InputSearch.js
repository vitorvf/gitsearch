import React, { useState, useRef } from 'react';
import Loadingvf from '../Loading/Loading';
import { Repositories } from '../Repositories/Repositories';
import './inputSearch.css';
import '../../style/global.css';

const InputSearch = () => {
  const [busca, setBusca] = useState('');
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const inputBusca = useRef();
  const [error, SetError] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    async function fetchCep() {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${inputBusca.current.value}`,
      );

      if (response.status === 404 || response.statusText === 'Not Found') {
        SetError(true);
      } else {
        SetError(false);
      }
      const json = await response.json();
      setData(json);
      setLoading(false);
    }

    setBusca(inputBusca.current.value);

    fetchCep();
  };

  return (
    <div>
      <main>
        <div id="box">
          <div>
            <h1 className="h1busca">Procure por algum perfil</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <input id="search" placeholder="" required ref={inputBusca} />
            <button type="submit" className="btn-search">
              Pesquisar
            </button>
          </form>
          {error && <p className="erropage">Erro! Digite Novamente!!!!!</p>}
        </div>
      </main>
      {loading && !error && <Loadingvf />}
      {!loading && !data.erro && data && (
        <Repositories archivevf={data} buscavf={busca} />
      )}
      ;
    </div>
  );
};

export default InputSearch;
