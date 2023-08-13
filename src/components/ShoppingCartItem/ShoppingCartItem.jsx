
import { Stack, Button } from 'react-bootstrap';
import { QuantityButtons } from '../QuantityButtons/QuantityButtons';

import { useShoppingCartContext } from '../../context/ShoppingCartContext';

import { formatCurrency } from '../../utilities/formatCurrency';
import storeItems from '../../data/items.json';

import styles from './ShoppingCartItem.module.css'


const ShoppingCartItem = ({
  id, 
  quantity
}) => {

  const cartItem = storeItems.find((storeItem) => {
    return storeItem.id === id;
  });

  if (!cartItem) {
    return null;
  }

  const {
    name, 
    price,
    imgUrl
  } = cartItem;

  const {
    removeItemFromCart
  } = useShoppingCartContext();

  return (
    <Stack 
      className='d-flex align-items-center'
      direction='horizontal' 
      gap={2} 
    >
      <img
        className={styles.img}
        src={imgUrl}
        alt={name}
      />
      <div className='me-auto'>
        <div> {name} </div>
        <div className={`text-muted ${styles['unit-price']}`}>
          {formatCurrency(price)}
        </div>
      </div>

      <Stack
        className='d-flex align-items-center'
        direction='vertical'
      >
        <div className={styles['total-price']}> {formatCurrency(price * quantity)}</div>
        <QuantityButtons id={id} quantity={quantity} size='sm' fontSize='fs-6' />
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
