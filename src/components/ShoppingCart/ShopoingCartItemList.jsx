import { Stack } from 'react-bootstrap';
import { ShoppingCartItem } from './ShoppingCartItem';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import { formatCurrency, convertStoreItemsArrayToMap } from '../../utilities/utils';
import storeItems from '../../data/items.json';
import { useMemo } from 'react';


const ShopoingCartItemList = () => {

  const { cartItems } = useShoppingCartContext();
  const storeItemMap = convertStoreItemsArrayToMap(storeItems);

  const totalPrice = useMemo(() => {
    const totalPrice = cartItems.reduce((totalPrice, cartItem) => {
      const targetItem = storeItemMap.get(cartItem.id);
      const { quantity } = cartItem;
      const { price } = targetItem;
    
      return totalPrice + price * quantity
    }, 0);

    return formatCurrency(totalPrice);

  }, [cartItems]);
  

  return (
    <Stack gap={3}>
      {cartItems.map((cartItem) => {
        return <ShoppingCartItem key={cartItem.id} {...cartItem} />
      })}

    <div className="ms-auto fw-bold fs-5">  
      Total:{" "} {totalPrice}
    </div>
  </Stack>
  )
}

export { ShopoingCartItemList };