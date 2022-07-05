import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import MobileMenuContainer from './components/MobileMenuContainer';
import FakeData from './components/FakeData.json';

function App() {

  console.log(FakeData);
  return (
    <>
      
      <div className="page-wrapper">
        <Header />

        <Main />

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
