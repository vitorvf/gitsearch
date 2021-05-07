import React, { useState, useEffect } from 'react';

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
      setData(posts.data);
    }

    loadData();
  }, [url]);
  return data;
}

const Repocards = () => {
  const data = useFetch(
    `https://api.github.com/users/${inputBusca.current.value}/repos`,
  );
  console.log(data);

  return (
    <div>
      <h1>{data?.country}</h1>
    </div>
  );
};

export default Repocards;
