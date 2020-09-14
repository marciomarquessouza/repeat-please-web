import React from 'react';
import { IButtonProps } from './interface';
import { ButtonStyle } from './styles';

export const Button = ({ children, onClick, variant, type }: IButtonProps) => (
	<ButtonStyle
		onClick={onClick}
		type={type}
		variant={variant}
		data-test="button-square">
		{children}
	</ButtonStyle>
);
