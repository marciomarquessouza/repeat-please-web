import React from 'react';
import { useTranslation } from 'react-i18next';
import LogoHeader from '../../assets/svg/LogoHeader';
import { HeaderContainer, ButtonContainer } from './styles';
import { ButtonSquare } from '../Button';
import { IHeaderProps } from './interfaces';

const Header = ({ onLoginClick }: IHeaderProps) => {
	const { t } = useTranslation();
	return (
		<HeaderContainer>
			<LogoHeader />
			<ButtonContainer>
				<ButtonSquare onClick={onLoginClick} data-test="header">
					{t('login')}
				</ButtonSquare>
			</ButtonContainer>
		</HeaderContainer>
	);
};

export default Header;
