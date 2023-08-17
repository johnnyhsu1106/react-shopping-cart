import {Col, Row } from 'react-bootstrap';
import { StoreItem } from './StoreItem';
import { SearchItems } from '../SearchItems/SearchItems';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
// import storeItems from '../../data//items.json';


const StoreItems = () => {
  const { filteredStoreItems } = useShoppingCartContext();

  return (
    <>
      <SearchItems />
      <Row
        className='g-3' 
        lg={3} md={2} xs={1}
      >
        {filteredStoreItems.map((filteredStoreItem) => {
          const { id } = filteredStoreItem;

          return (
            <Col key={id}>
              <StoreItem {...filteredStoreItem} /> 
            </Col>
            )
        })}
      </Row>
    </>
  )
}

export { StoreItems };
