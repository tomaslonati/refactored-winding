import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home.jsx';
import Products from './components/pages/products.jsx';
import SingleProduct from './components/pages/singleProduct.jsx';
import Header from './components/common/header.jsx';
import Footer from './components/common/footer.jsx';


function App() {
  return (
    <Router basename="/react-demo/my-react-app">
      <Header />
      <main>        
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Home />} />
          {/* Rutas para productos */}
          <Route path="/products" element={<Products />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:productId" element={<SingleProduct />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
