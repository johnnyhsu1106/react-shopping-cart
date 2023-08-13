import { Offcanvas } from 'react-bootstrap';
import { ShopoingCartItemList } from '../ShoppingCartItemList/ShopoingCartItemList';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';


const ShoppingCart = () => {
  const {
    isShoppingCartOpen,
    closeShoppingCart,
  } = useShoppingCartContext();

  return (
    <Offcanvas 
      show={isShoppingCartOpen} 
      onHide={closeShoppingCart} 
      placement='end'>
  
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      
      <Offcanvas.Body>
        <ShopoingCartItemList />
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export { ShoppingCart };
