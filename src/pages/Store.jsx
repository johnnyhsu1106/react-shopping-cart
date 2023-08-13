
import { Col, Row } from 'react-bootstrap';

import { StoreItem } from '../components/StoreItem/StoreItem';
import storeItems from '../data//items.json';


const Store = () => {
  return (
    <>
    <h1>Apple Store</h1>
    <Row
      className='g-3' 
      lg={3} md={2} xs={1}
    >
      {storeItems.map((storeItem) => {
        const { id } = storeItem;

        return (
          <Col key={id}>
            <StoreItem {...storeItem} /> 
          </Col>
          )
      })}
      
    </Row>
    </>
  )
}

export { Store };
