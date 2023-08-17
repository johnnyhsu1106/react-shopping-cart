import { Button } from 'react-bootstrap';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import styles from './QuantityButtons.module.css';


const QuantityButtons = ({
  id,
  quantity,
  size='md',
  fontSize='fs-3',
  variant=''
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
        
        <span className={fontSize}>{ quantity }</span>

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