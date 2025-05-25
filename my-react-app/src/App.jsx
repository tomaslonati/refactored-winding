import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home.jsx';
import Products from './components/pages/products.jsx';
import Header from './components/common/header.jsx';

function App() {
  return (
    <Router basename="/react-demo/my-react-app">
      <Header />
      <main>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Home />} />
          {/* Ruta para productos */}
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
