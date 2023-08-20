import {Col, Row } from 'react-bootstrap';
import { StoreItem } from './StoreItem';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
// import storeItems from '../../data//items.json';


const StoreItems = () => {
  const { filteredStoreItems } = useShoppingCartContext();

  return (
    <>
      <Row
        className='g-3' 
        lg={3} md={2} xs={1}
      >
        {filteredStoreItems.map((filteredStoreItem) => {
          const { 
            id,
            title,
            price,
            image
          } = filteredStoreItem;

          return (
            <Col key={id}>
              <StoreItem
                imgStyle='shop-style'
                id={id}
                title={title}
                price={price}
                image={image}  
              /> 
            </Col>
            )
        })}
      </Row>
    </>
  )
}

export { StoreItems };
