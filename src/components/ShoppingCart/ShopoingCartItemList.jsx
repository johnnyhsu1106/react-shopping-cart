import { useMemo } from 'react';
import { Stack } from 'react-bootstrap';
import { ShoppingCartItem } from './ShoppingCartItem';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import { formatCurrency, convertStoreItemsArrayToMap } from '../../utilities/utils';


const ShopoingCartItemList = () => {
  const { 
    cartItems,
    storeItems
   } = useShoppingCartContext();

  if (cartItems.length === 0) {
    return <p> Your cart is empty</p>
  }
  const storeItemMap = convertStoreItemsArrayToMap(storeItems);

  const totalPrice = useMemo(() => {
    const totalPrice = cartItems.reduce((totalPrice, cartItem) => {
      const targetItem = storeItemMap.get(cartItem.id);
      if (!targetItem) {
        return totalPrice;
      }
      
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