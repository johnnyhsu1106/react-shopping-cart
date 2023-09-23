import { memo } from 'react';
import { Form } from 'react-bootstrap';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import styles from './SearchItems.module.css';


const SearchItems = () => {
  const { 
    searchQuery,
    searchStoreItems,
    clearSearchStoreItems
  } = useShoppingCartContext();

  const hasSearchQuery = searchQuery !== '';

  const DeleteBtn = memo(({ hasSearchQuery }) => {
    if (!hasSearchQuery) {
      return null;
    }
    return (
      <div 
        className={styles['search-delete-btn']}
        onClick={clearSearchStoreItems}
      >
        &times;
      </div> 
    )
  })

  return (
    <Form.Group className='position-relative'>
      <Form.Control
        className='w-50 mb-5 mx-auto'
        type='text'
        placeholder='Search by keyword'
        value={searchQuery}
        onChange={(e) => { searchStoreItems(e.target.value) }}
      />
      <DeleteBtn hasSearchQuery={hasSearchQuery} />
    </Form.Group>
  )
}

export { SearchItems };