import React from 'react';
import LogoHeader from '../../assets/svg/LogoHeader';
import { HeaderContainer } from './styles';
import { ButtonSquare } from '../Button';
import { IHeaderProps } from './interfaces';

const Header = ({ onLoginClick }: IHeaderProps) => (
	<HeaderContainer>
		<LogoHeader />
		<ButtonSquare onClick={onLoginClick}>Login</ButtonSquare>
	</HeaderContainer>
);

export default Header;
