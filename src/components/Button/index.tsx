import React from 'react';
import { IButtonProps } from './interface';
import { ButtonStyle } from './styles';

export const Button = ({
	children,
	onClick,
	variant,
	circular,
}: IButtonProps) => (
	<ButtonStyle
		onClick={onClick}
		variant={variant}
		circular={circular}
		data-test="button-square">
		{children}
	</ButtonStyle>
);
