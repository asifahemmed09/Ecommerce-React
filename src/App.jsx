import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router';
import OrderPage from './pages/OrderPage';
import TrackingPage from './pages/TrackingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
