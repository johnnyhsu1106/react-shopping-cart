const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
})

const formatCurrency = (num) => {
  return CURRENCY_FORMATTER.format(num);
};

const convertStoreItemsArrayToMap = (storeItems) => {
  const storeItemsMap = new Map();

  storeItems.forEach((storeItem) => {
    const { id, ...itemData } = storeItem;
    storeItemsMap.set(id, itemData);
  });

  return storeItemsMap;
}

export { formatCurrency, convertStoreItemsArrayToMap };