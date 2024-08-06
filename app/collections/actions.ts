const CURRENCY = new Intl.NumberFormat(undefined, {
	currency: "USD",
	style: "currency",
});

export const formatPrice = (price: number) => {
	return CURRENCY.format(price);
};
