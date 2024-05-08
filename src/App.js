 import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner'; 
import ProductsShop from './components/ProductsShop';
import ProductCard from './components/ProductCard'; 
import ProductsDisplay from './components/ProductsDisplay';
import Newsletter from './components/Newsletter';

function App() {
  return (
     <>
      <Header/>
      <Banner/> 
      <ProductsShop/>
      <ProductCard/>
      <ProductsDisplay />
      <Newsletter/>
      <Footer/>
     </>
  );
}

export default App;
