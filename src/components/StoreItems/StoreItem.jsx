import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StoreItemBtns } from './StoreItemBtns';
import { formatCurrency } from '../../utilities/utils';
import styles from './StoreItem.module.css';


const StoreItem = ({
  id,
  title,
  price,
  image
}) => {

  return (
    <Card className='h-100'>
      <Link to={`product/${id}`}>
        <Card.Img
          className={`${styles.img}`}
          variant='top'
          src={image}
          alt={title}
        />
      </Link>
       
       <Card.Body className='d-flex flex-column'>
        
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-5'> {title} </span>
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