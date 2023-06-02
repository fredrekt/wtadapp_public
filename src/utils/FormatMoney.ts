const FormatMoney = (number: number) => {
	if (!number) number = 0;
	return new Intl.NumberFormat('en-US').format(number);
};

export default FormatMoney;
