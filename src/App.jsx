import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<h1>Checkout Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
