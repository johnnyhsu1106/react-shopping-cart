import { Button, Container, Nav, Navbar as NavBs } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useShoppingCartContext } from '../../context/ShoppingCartContext';

import ShoppingCartLogo from '../../../images/shopping-cart.svg';
import styles from './Navbar.module.css';


const Navbar = () => {
  const { 
    cartQuantity, 
    openShoppingCart
   } = useShoppingCartContext();

  return (
    <NavBs
      sticky='top' 
      className='bg-black shadow-sm mb-3'>
      <div className={styles.btn}></div>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link className='text-light' to='/' as={NavLink}>Home</Nav.Link>
          <Nav.Link className='text-light' to='/store' as={NavLink}>Store</Nav.Link>
          <Nav.Link className='text-light' to='/about' as={NavLink}>About</Nav.Link>
        </Nav>
        <Button 
          className={`${styles.btn} rounded-circle bg-white`} 
          variant='outline-secondary'
          onClick={openShoppingCart}
        >
          <img src={ShoppingCartLogo} alt='shopping cart logo' />
          
          <div className={`${styles.icon} rounded-circle bg-primary d-flex justify-content-center align-item-center`}>
            {cartQuantity}
          </div>
        </Button>        
      </Container>
    </NavBs>
  )
}

export { Navbar };
