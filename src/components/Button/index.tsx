import React from 'react';
import { IButtonProps } from './interface';
import { ButtonStyle } from './styles';
import Loader from 'react-loader-spinner';

export const Button = ({
	children,
	onClick,
	variant,
	type,
	loading = false,
}: IButtonProps) => (
	<ButtonStyle
		onClick={onClick}
		disabled={loading}
		type={type}
		variant={variant}
		data-test="button-square">
		{loading ? (
			<Loader type="Puff" color="#fff" height={20} width={20} />
		) : (
			children
		)}
	</ButtonStyle>
);
