
import { Stack, Button } from 'react-bootstrap';
import { QuantityButtons } from '../QuantityButtons/QuantityButtons';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/utils';
import styles from './ShoppingCartItem.module.css'


const ShoppingCartItem = ({
  id, 
  quantity
}) => {
  const { 
    removeItemFromCart, 
    storeItems 
  } = useShoppingCartContext();

  const cartItem = storeItems.find((storeItem) => {
    return storeItem.id === id;
  });

  if (!cartItem) {
    return null;
  }

  const {
    title,
    price,
    image,
  } = cartItem;

  return (
    <Stack 
      className='d-flex align-items-center'
      direction='horizontal' 
      gap={2} 
    >
      <img
        className={styles.img}
        src={image}
        alt={title}
      />
      <div className='me-auto'>
        <div className='fs-6'> 
          {name}
        </div>
        <div className={`text-muted ${styles['unit-price']}`}>
          {formatCurrency(price)}
        </div>
      </div>

      <Stack
        className='d-flex align-items-center justify-content-center'
        direction='vertical'
      >
        <QuantityButtons id={id} quantity={quantity} size='sm' fontSize='fs-6' />
        <div className={styles['total-price']}> {formatCurrency(price * quantity)}</div>
    
      </Stack>

      <Button
        variant='outline-danger'
        size='sm'
        onClick={() => { removeItemFromCart(id) }}
      >
        &times;
      </Button>
    </Stack>
  )
}

export { ShoppingCartItem };
