import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home.jsx';
import Products from './components/pages/products.jsx';

function App() {
  return (
    <Router basename="/react-demo/my-react-app">
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
