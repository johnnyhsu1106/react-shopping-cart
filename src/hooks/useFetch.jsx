import { useEffect, useState } from 'react';


const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Invalid Http Request');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.err(err);
      })
  }, []);

  return [data, setData]
}


export default useFetch;
