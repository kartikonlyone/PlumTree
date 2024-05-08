import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner'; 
import ProductsShop from './components/ProductsShop';
import ProductCard from './components/ProductCard';

function App() {
  return (
     <>
      <Header/>
      <Banner/> 
      <ProductsShop/>
      <ProductCard/>
      <Footer/>
     </>
  );
}

export default App;
