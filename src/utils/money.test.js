import { it, expect, describe } from 'vitest';
import { formatMoney } from './money';

describe('formatMoney', () => {
  it('fomats 1999 cents to $19.99', () => {
    expect(formatMoney(1999)).toBe('$19.99');
  });

  it('displays 190 cents as $1.90', () => {
    expect(formatMoney(190)).toBe('$1.90');
    expect(formatMoney(100)).toBe('$1.00');
  });
});
