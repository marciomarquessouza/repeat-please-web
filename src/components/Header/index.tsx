import React from 'react';
import { useTranslation } from 'react-i18next';
import LogoHeader from '../../assets/svg/LogoHeader';
import { HeaderContainer } from './styles';
import { ButtonSquare } from '../Button';
import { IHeaderProps } from './interfaces';

const Header = ({ onLoginClick }: IHeaderProps) => {
	const { t } = useTranslation();
	return (
		<HeaderContainer>
			<LogoHeader />
			<ButtonSquare onClick={onLoginClick}>{t('login')}</ButtonSquare>
		</HeaderContainer>
	);
};

export default Header;
