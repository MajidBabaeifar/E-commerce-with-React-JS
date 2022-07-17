import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import MobileMenuContainer from './components/MobileMenuContainer';

import { Route, Routes } from 'react-router';
import ProductList from './components/ProductList';
import BlogPostsList from './components/BlogPostsList';
import Cart from './components/Cart';
import WishList from './components/WishList';
import Error404 from './components/Error404';
import SingleProductPage from './components/SingleProductPage';

function App() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/productlist/:productId' element={<SingleProductPage />} />
          <Route path='/blogpostslist' element={<BlogPostsList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<WishList />} />
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
