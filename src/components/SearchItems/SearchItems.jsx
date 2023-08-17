import { Form } from 'react-bootstrap';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';

const SearchItems = () => {
  const { 
    searchQuery,
    searchStoreItems 
  } = useShoppingCartContext();

  return (
    <Form.Control
      className='w-50 mb-5 mx-auto'
      type='text'
      placeholder='Search by keyword'
      value={searchQuery}
      onChange={(e) => { searchStoreItems(e.target.value) }}
    />
  )
}

export { SearchItems };