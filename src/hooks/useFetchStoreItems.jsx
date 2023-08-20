import { useEffect, useState } from 'react';


const useFetchStoreItems = () => {
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Invalid Http Request');
        }
        return res.json();
      })
      .then((data) => {
        setStoreItems(data);
      })
      .catch((err) => {
        console.err(err);
      })
  }, []);

  return [storeItems, setStoreItems]
}


export default useFetchStoreItems;
