import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import ShoppingCartLogo from '/images/shopping-cart.svg';
import styles from './Navbar.module.css';


const Navbar = () => {
  const { 
    cartQuantity, 
    openShoppingCart
   } = useShoppingCartContext();

  return (
    <NavbarBs
      sticky='top' 
      className='bg-black shadow-sm mb-5'>
      <div className={styles.btn}></div>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link className='text-light' to='/' as={NavLink}>Store</Nav.Link>
          <Nav.Link className='text-light' to='/about' as={NavLink}>About</Nav.Link>
        </Nav>
        <Button 
          className={`${styles.btn} rounded-circle bg-white`} 
          variant='outline-secondary'
          onClick={openShoppingCart}
        >
          <img src={ShoppingCartLogo} alt='shopping cart logo' />
          {cartQuantity !== 0 && 
            <div className={`${styles.icon} rounded-circle bg-primary d-flex justify-content-center align-item-center`}>
              {cartQuantity}
            </div>
          }
        </Button>        
      </Container>
    </NavbarBs>
  )
}

export { Navbar };
