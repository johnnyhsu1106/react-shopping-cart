import { Button } from 'react-bootstrap';

import { QuantityButtons } from '../share/QuantityButtons/QuantityButtons';

import { useShoppingCartContext } from '../../context/ShoppingCartContext';


const StoreItemBtns = ({ id }) => {

  const { 
    getItemQuantity, 
    increaseCartQuantity 
  } = useShoppingCartContext();
  
  const quantity = getItemQuantity(id);
  
  if (quantity === 0) {
    
    return (
      <Button 
        className='w-100'
        variant='outline-dark' 
        size='sm'
        onClick={() => { increaseCartQuantity(id) }}
      > 
        Add To Cart
      </Button>
    );  
  }
  
  return (
    <QuantityButtons 
      id={id} 
      quantity={quantity}
      variant='outline-secondary'
      fontSize='fs-5' 
    />
  );
}


export { StoreItemBtns };
