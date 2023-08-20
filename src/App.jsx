import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { StorePage } from './pages/StorePage';
import { AboutPage } from './pages/AboutPage';
import { ProductItemPage } from './pages/ProductItemPage'; 
import { NotFoundPage } from './pages/NotFoundPage';
import { Navbar } from './components/Navbar/Navbar';
import { ProductItemContext } from './context/ProductContext';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import './App.css';


const App = () => {
  return (
    <>
      <ShoppingCartProvider>
      <Navbar />
        <Container className='mb-4'>
          <Routes>
            <Route path='/' element={<StorePage />} />
            <Route path='product' element={<ProductItemContext />}>
              <Route path=':id' element={<ProductItemPage />} />
            </Route>
            <Route path='about' element={<AboutPage />} />
            <Route path='*'element={<NotFoundPage />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  )
}

export default App;
