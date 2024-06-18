const calculatePrice = (product) => {
  return product.kg * product.pricePerKg + product.selfCost + product.plusCost;
};

export default calculatePrice;
