import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Product from './Product';
import { formatMoney } from '../../utils/money';

describe('product page', () => {
  const product = {
    id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
    keywords: ['socks', 'sports', 'apparel'],
  };
  const loadCartItems = vi.fn();
  it('displays the prodct details correctly', () => {
    render(<Product product={product} loadCartItems={loadCartItems} />);

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(formatMoney(product.priceCents))).toBeInTheDocument();
    expect(screen.getByTestId("product-image")).toHaveAttribute("src", product.image);
    expect(screen.getByText(product.rating.count)).toBeInTheDocument();
    expect(screen.getByTestId('rating-image')).toHaveAttribute('src', `images/ratings/rating-${product.rating.stars * 10}.png`);
  });
});
