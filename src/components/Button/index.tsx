import React from 'react';
import { IButtonSquareProps } from './interface';
import { ButtonSquareStyle } from './styles';

export const ButtonSquare = ({ children, onClick }: IButtonSquareProps) => (
	<ButtonSquareStyle type="button" onClick={onClick} data-test="button-square">
		{children}
	</ButtonSquareStyle>
);
