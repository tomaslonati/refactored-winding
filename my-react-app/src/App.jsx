import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home.jsx';
import Products from './components/pages/products.jsx';
import SingleProduct from './components/pages/singleProduct.jsx';
import Header from './components/common/header.jsx';
import Footer from './components/common/footer.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import Calculador from './components/pages/CalculadorDeConsumo.jsx';

function App() {
  return (
    <Router basename="/react-demo/my-react-app">
      <ScrollToTop />
      <Header />
      <main>        
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
      <a
        href="https://wa.me/5492966312854"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-8 right-8 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-0 w-16 h-16 flex items-center justify-center transition-colors"
        aria-label="WhatsApp"
      >
        <img src="public/assets/common/whatsapp.png" alt="WhatsApp" className="w-12 h-12 object-contain p-2" />
      </a>
    </Router>
  );
}

export default App;
