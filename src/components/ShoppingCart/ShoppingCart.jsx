import { Offcanvas, Stack } from 'react-bootstrap';
import { ShoppingCartItem} from '../ShoppingCartItem/ShoppingCartItem';

import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import storeItems from '../../data/items.json';
import styles from './ShoppingCart.module.css';

const ShoppingCart = () => {
  const {
    isShoppingCartOpen,
    closeShoppingCart,
    cartItems
  } = useShoppingCartContext();

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
    <Offcanvas 
      show={isShoppingCartOpen} 
      onHide={closeShoppingCart} 
      placement='end'>
  
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((cartItem) => {
            return <ShoppingCartItem key={cartItem.id} {...cartItem} />
          })}

          <div className="ms-auto fw-bold fs-5">  
            Total{" "} {calculateTotalPrice()}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export { ShoppingCart };
