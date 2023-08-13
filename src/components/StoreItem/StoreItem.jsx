import { Card, Button } from 'react-bootstrap';
import { QuantityButtons } from '../QuantityButtons/QuantityButtons';

import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import styles from './StoreItem.module.css';

const StoreItem = ({
  id,
  name,
  price,
  imgUrl
}) => {

  const {
    getItemQuantity,
    increaseCartQuantity
  } = useShoppingCartContext();

  const quantity = getItemQuantity(id);
  
  const renderStoreItemBtns = (quantity) => {
    if (quantity === 0) {
      return (
      <Button 
        className='w-100'
        variant='outline-secondary' 
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
      />
    );
  };


  return (
    <Card className='h-100'>
      <Card.Img
        className={`${styles.img}`}
        vairant='top'
        src={imgUrl}
        alt={name}
       />
       
       <Card.Body className='d-flex flex-column'>
        
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-2'> {name} </span>
          <span className='ms-2 text-muted'> {formatCurrency(price)} </span>
        </Card.Title>

        <div className='mt-auto'>
          {renderStoreItemBtns(quantity)}
        </div>

       </Card.Body>
    </Card>    
      

  )
}

export { StoreItem };