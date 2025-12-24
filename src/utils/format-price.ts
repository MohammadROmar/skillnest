export function formatPrice(balance: number) {
  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(balance);
}
