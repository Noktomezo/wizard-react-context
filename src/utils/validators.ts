export function isEmailValid(email: string) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

export function isRuPhoneValidNumber(number: string) {
	const re = /^(\+7|8)\d{10}$/;
	return re.test(number);
}
