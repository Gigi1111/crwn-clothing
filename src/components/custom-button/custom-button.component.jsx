import React from 'react';
import './custom-button.styles.scss';

//styled components
import { CustonButtonContainer } from './custom-buton.styles';

const CustomButton = ({ children, ...props }) => <CustonButtonContainer {...props}>{children}</CustonButtonContainer>;
/*
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
	<button
		className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''}  custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);*/
export default CustomButton;
