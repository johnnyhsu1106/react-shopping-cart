import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import { NotFoundPage } from '../pages/NotFoundPage';
import { useShoppingCartContext } from './ShoppingCartContext';


const ProductItemContext = () => {
  const { storeItems } = useShoppingCartContext();
  const { id } = useParams();
  console.log('id ', id);

  const productItem = storeItems.find((storeItem) => {
    return storeItem.id === parseInt(id);
  });
  

  if (!productItem) {
    return <NotFoundPage />
  }

  return <Outlet context={productItem} />
}

const useProductItem = () => {
  return useOutletContext();
};

export { useProductItem, ProductItemContext };

