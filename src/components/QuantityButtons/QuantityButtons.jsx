import { Button } from 'react-bootstrap';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import styles from './QuantityButtons.module.css';


const QuantityButtons = ({
  id,
  quantity,
  size='md',
  fontSize='md',
  variant='none'
}) => {
  const {
    increaseCartQuantity,
    decreaseCartQualtity
  } = useShoppingCartContext();


  return (
    <div className={`${styles.gap} ${styles.btns} d-flex align-items-center flex-column`}>
      <div className={`${styles.gap}  d-flex align-items-center justify-content-center`}>
        <Button
          size={size} 
          variant={variant}
          onClick={ () => {decreaseCartQualtity(id)} }
        > 
          - 
        </Button>
        
        <span className={fontSize === 'md' ? 'fs-4' : 'fs-8'}>{ quantity }</span>

        <Button
          size={size}  
          variant={variant}
          onClick={() => { increaseCartQuantity(id) }}
        > 
          + 
        </Button>
      </div>
    </div>
  )
}

export { QuantityButtons }; 