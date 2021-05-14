import React, { useState, useEffect } from 'react';
import './style.css';
import Star from '../../img/star.svg';
import Forks from '../../img/forks.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function loadData() {
      const response = await fetch(url);
      if (!response.ok) {
        console.log('erro');
        return;
      }

      const posts = await response.json();
      setData(posts);
    }

    loadData();
  }, [url]);
  return data;
}

const Repocards = ({ buscainput }) => {
  const data = useFetch(`https://api.github.com/users/${buscainput}/repos
  `);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  console.log(data);

  return (
    <div data-aos="fade-right" id="cards">
      {data?.map((repo) => (
        <a
          href={repo.html_url}
          key={repo.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="testevf">
            <div>
              {' '}
              <h3>{repo.name}</h3>
            </div>

            <div>
              <p>{repo.description}</p>
            </div>

            <div className="faixa3">
              <div className="language">
                <p className="ok">{repo.language}</p>
              </div>

              <div className="star">
                <img src={Star} width="15" alt="" />
                <p>{repo.stargazers_count}</p>
              </div>

              <div className="forks">
                <img src={Forks} width="15" alt="" />
                <p>{repo.forks}</p>
              </div>

              <div>
                <p className="kb">{repo.size}Kb</p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Repocards;
