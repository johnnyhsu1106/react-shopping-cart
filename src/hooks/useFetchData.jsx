import { useEffect, useState } from 'react';


const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);

    } catch (error) {
      setIsError(true);

    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, isError };
}


export default useFetchData;

