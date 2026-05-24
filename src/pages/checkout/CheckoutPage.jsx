import { formatMoney } from '../../utils/money';
import './CheckoutPage.css';
import './CheckoutHeader.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import DeliveryOptions from './DeliveryOptions';
import PaymentSummary from './PaymentSummary';

function CheckoutPage({ cart, loadCartItems }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState({});
  useEffect(() => {
    const fetchDeliveryOptions = async () => {
      try {
        const response = await axios.get(
          '/api/delivery-options?expand=estimatedDeliveryTime'
        );
        setDeliveryOptions(response.data);
      } catch (error) {
        console.error('Error fetching delivery options:', error);
      }
    };

    fetchDeliveryOptions();
  }, []);
  useEffect(() => {
    const fetchPaymentSummary = async () => {
      try {
        const response = await axios.get('/api/payment-summary');
        setPaymentSummary(response.data);
      } catch (error) {
        console.error('Error fetching payment summary:', error);
      }
    };

    fetchPaymentSummary();
  }, [cart]);

  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              {cart.reduce((total, item) => total + item.quantity, 0)} items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {deliveryOptions.length > 0 &&
              cart.map((cartItem) => {
                const estimatedDeliveryOptions = deliveryOptions.find(
                  (option) => option.id === cartItem.deliveryOptionId
                );
                const handleDeleteCartItem = async () => {
                  try {
                    await axios.delete(`/api/cart-items/${cartItem.ProductId}`);
                  } catch (error) {
                    console.error('Error deleting cart item:', error);
                  }
                  await loadCartItems();
                };
                return (
                  <div className="cart-item-container">
                    <div className="delivery-date">
                      Delivery date:{' '}
                      {dayjs(
                        estimatedDeliveryOptions.estimatedDeliveryTimeMs
                      ).format('dddd, MMMM D')}
                    </div>

                    <div className="cart-item-details-grid">
                      <img
                        className="product-image"
                        src={cartItem.product.image}
                      />

                      <div className="cart-item-details">
                        <div className="product-name">
                          {cartItem.product.name}
                        </div>
                        <div className="product-price">
                          {formatMoney(cartItem.product.priceCents)}
                        </div>
                        <div className="product-quantity">
                          <span>
                            Quantity:{' '}
                            <span className="quantity-label">
                              {cartItem.quantity}
                            </span>
                          </span>
                          <span className="update-quantity-link link-primary">
                            Update
                          </span>
                          <span
                            className="delete-quantity-link link-primary"
                            onClick={handleDeleteCartItem}
                          >
                            Delete
                          </span>
                        </div>
                      </div>

                      <DeliveryOptions
                        deliveryOptions={deliveryOptions}
                        cartItem={cartItem}
                        loadCartItems={loadCartItems}
                      />
                    </div>
                  </div>
                );
              })}
          </div>

          <PaymentSummary paymentSummary={paymentSummary} loadCartItems={loadCartItems} />
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
