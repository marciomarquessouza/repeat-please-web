import React from 'react';
import { ILinkProps } from './interface';
import { LinkStyle } from './styles';

export const LinkButton = ({ onClick, children }: ILinkProps) => (
	<LinkStyle type="button" onClick={onClick}>
		{children}
	</LinkStyle>
);
