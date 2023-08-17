import { Card } from 'react-bootstrap';
import { StoreItemBtns } from './StoreItemBtns';
import { formatCurrency } from '../../utilities/utils';
import styles from './StoreItem.module.css';


const StoreItem = ({
  id,
  name,
  price,
  imgUrl
}) => {

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
          <span className='fs-5'> {name} </span>
          <span className='fs-6 ms-2 text-muted'> {formatCurrency(price)} </span>
        </Card.Title>

        <div className='mt-auto'>
          <StoreItemBtns id={id}/>
        </div>

       </Card.Body>
    </Card>    
      

  )
}

export { StoreItem };