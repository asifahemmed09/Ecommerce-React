import { formatMoney } from '../../utils/money';
import dayjs from 'dayjs';

function DeliveryOptions({ deliveryOptions, cartItem }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((option) => {
        let priceString = 'FREE Shipping';
        if (option.priceCents > 0) {
          priceString = `${formatMoney(option.priceCents)} - Shipping`;
        }
        return (
          <div key={option.id} className="delivery-option">
            <input
              type="radio"
              checked={cartItem.deliveryOptionId === option.id}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeliveryOptions;
