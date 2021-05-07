import React, { useState, useRef } from 'react';
import Loadingvf from '../Loading/Loading';
import { Repositories } from '../Repositories/Repositories';
// import { useNavigate } from 'react-router-dom';
import './inputSearch.css';
import '../../style/global.css';
const InputSearch = () => {
  // const navigate = useNavigate();

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

    fetchCep();
    console.log(data);
    // navigate(`/user/${inputBusca.current.value}`);
  };

  return (
    <div>
      <main>
        <div id="box">
          <div>
            <h1 className="h1busca">Procure por algum perfil</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              id="search"
              placeholder="Digite um CEP"
              required
              ref={inputBusca}
            />
            <button type="submit" className="btn-search">
              Rastrear
            </button>
          </form>
        </div>
      </main>
      {loading && !error && <Loadingvf />}
      {!loading && !data.erro && data && <Repositories archivevf={data} />}
      {error && <p>Erro! Digite Novamente!!!!!</p>}
    </div>
  );
};

export default InputSearch;
