import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
