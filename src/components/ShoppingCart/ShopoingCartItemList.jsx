import { Stack } from 'react-bootstrap';
import { ShoppingCartItem } from './ShoppingCartItem';

import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import storeItems from '../../data/items.json';

import { formatCurrency } from '../../utilities/formatCurrency';

const ShopoingCartItemList = () => {

  const { cartItems } = useShoppingCartContext();

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((totalPrice, cartItem) => {
      const targetItem = storeItems.find((storeItem) => {
        return storeItem.id === cartItem.id;
      });

      const { quantity } = cartItem;
      const { price } = targetItem;
    
      return totalPrice + price * quantity
    }, 0);

    return formatCurrency(totalPrice);
  }
  
  return (
    <Stack gap={3}>
      {cartItems.map((cartItem) => {
        return <ShoppingCartItem key={cartItem.id} {...cartItem} />
      })}

    <div className="ms-auto fw-bold fs-5">  
      Total:{" "} {calculateTotalPrice()}
    </div>
  </Stack>
  )
}

export { ShopoingCartItemList };