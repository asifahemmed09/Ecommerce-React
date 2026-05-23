import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;
