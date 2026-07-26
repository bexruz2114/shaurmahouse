// Format a number (in so'm) into a tidy price string.
// e.g. 28000 -> "28 000 so'm"
export function formatPrice(value) {
  return `${new Intl.NumberFormat('en-US').format(value)} so'm`;
}
