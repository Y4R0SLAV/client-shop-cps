export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getFormattedPrice = (price: number): string => {
  // TODO получать валюту из стора и возвращать не строго рубли
  if (price < 1000) {
    return price + "₽";
  }
  const stringPrice = price.toString();
  return stringPrice.slice(0, -3) + " " + stringPrice.slice(-3) + " ₽";
};
