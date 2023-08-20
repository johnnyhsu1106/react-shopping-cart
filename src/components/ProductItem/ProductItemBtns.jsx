import { Button } from 'react-bootstrap';
import { QuantityButtons } from '../QuantityButtons/QuantityButtons';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';


const ProductItemBtns = ({
  id
}) => {
    const { 
      getItemQuantity, 
      increaseCartQuantity 
    } = useShoppingCartContext();
    
    const quantity = getItemQuantity(id);
    
    if (quantity === 0) {
      
      return (
        <Button 
          className='w-50'
          variant='outline-primary' 
          size='lg'
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
        fontSize='fs-2' 
        size='lg'
      />
    );

}

export { ProductItemBtns };