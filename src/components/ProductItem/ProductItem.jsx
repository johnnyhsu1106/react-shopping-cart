import { Card, Row, Col, Badge, Stack  } from 'react-bootstrap';
import { ProductItemBtns } from './ProductItemBtns';
import { useProductItemContext } from '../../context/ProductContext'
import { formatCurrency } from '../../utilities/utils';
import style from './ProductItem.module.css'

const ProductItem = () => {
  const {
    id,
    title,
    price,
    description,
    image, 
    rating
  } = useProductItemContext();
  const { rate } = rating;

  return (
    <Card className='h-100'>
      <Row>
        <Col>
          <Card.Img
            className={`${style.img}`}
            vairant='top'
            src={image}
            alt={title}
          />
        </Col>
        <Col>
          <Card.Body className='d-flex flex-column justify-content-center h-100'>
            
            <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
              <span className='fs-4'> {title} </span>
              <Stack
                className='align-items-end' 
                gap={3} 
              >
              <span className='fs-4 ms-2 text-muted'> {formatCurrency(price)} </span>
              <span>
              <Badge 
                className='text-white text-truncate'
                bg='success'
              >
                {rate}
              </Badge>
              </span>
              </Stack>
            </Card.Title>

            <Card.Text className='fs-5 mb-5'>
              {description}
            </Card.Text>

            <div className='mt-auto d-flex flex-column align-items-center'>
              <ProductItemBtns id={id}/>
            </div>

          </Card.Body>
        </Col>
      </Row>
    </Card>    
    
  )
}

export { ProductItem };
