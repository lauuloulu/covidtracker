import { useState, useEffect } from 'react';

function useFetch (url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  },);

  return {data} (
   
  );
}

export default useFetch;