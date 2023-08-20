
import { Stack, Button } from 'react-bootstrap';
import { QuantityButtons } from '../QuantityButtons/QuantityButtons';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/utils';
import styles from './ShoppingCartItem.module.css'
import { Link } from 'react-router-dom';


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
      
        <Link
          className='text-decoration-none' 
          to={`product/${id}`}>
          <Stack gap={3}>
      
          <img
            className={styles.img}
            src={image}
            alt={title}
          />

            <div className={`fs-6 ${styles.title} text-muted`}> 
              {title}
            </div>
            
            <div className={`${styles['unit-price']} text-muted`}>
              {formatCurrency(price)}
            </div>
          </Stack>
        </Link>
      

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
