import { Link } from 'react-router';
import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money';
import './OrderPage.css';
import Header from '../../components/Header';
import OrdersGrid from './OrdersGrid';

function OrderPage({ cart }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get('/api/orders?expand=products')
      .then((response) => setOrders(response.data));
  }, []);
  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} />
      </div>
    </>
  );
}

export default OrderPage;
