//npm install react-stripe-checkout
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	//use cents
	const priceForStrip = price * 100;
	const publishableKey = 'pk_test_wt5VBJ5XEepdroFjw2zIFvFU00x2Ygr2bN';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="http://svgshare.com/i/CUz.svg"
			description={`Your total is ${price}`}
			amount={priceForStrip}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};
export default StripeCheckoutButton;
