import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home.jsx';
import Products from './components/pages/products.jsx';
import SingleProduct from './components/pages/singleProduct.jsx';
import Header from './components/common/header.jsx';
import Footer from './components/common/footer.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import Calculador from './components/pages/CalculadorDeConsumo.jsx';
import WhatsappButton from './components/common/WhatsappButton.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className='bg-[#E6F4F8]'>        
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Home />} />
          {/* Rutas para productos */}
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:productId" element={<SingleProduct />} />
          <Route path="/productos/:productId" element={<SingleProduct />} />
          <Route path="/calculador" element={<Calculador />} />

        </Routes>
      </main>
      <Footer />
      {/* Botón flotante de WhatsApp */}
      <WhatsappButton />
    </Router>
  );
}

export default App;
