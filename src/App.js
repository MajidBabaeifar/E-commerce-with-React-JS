import { Route, Routes } from 'react-router';

import './App.css';
import Hedear from './components/headerfooter/Header';
import Main from './components/home/Main';
import ProductList from './components/shop/ProductList';
import SingleProductPage from './components/shop/SingleProductPage';
import BlogPostsList from './components/blog/BlogPostsList';
import Cart from './components/shop/Cart';
import WishList from './components/shop/WishList';
import Error404 from './components/Error404';
import Footer from './components/headerfooter/Footer';
import MobileMenuContainer from './components/home/MobileMenuContainer';
import RegisterAndLogin from './components/loginandregister/RegisterAndLogin';


function App() {
  return (
    <>
      <div className="page-wrapper">
        <Hedear />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/productlist/:productId' element={<SingleProductPage />} />
          <Route path='/blogpostslist' element={<BlogPostsList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/registerandlogin' element={<RegisterAndLogin />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
        <Footer />
      </div>{/* End .page-wrapper  */}
      <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button>
      {/* Mobile Menu  */}
      <div className="mobile-menu-overlay"></div>{/* End .mobil-menu-overlay  */}
      <MobileMenuContainer />
    </>
  );
}

export default App;
