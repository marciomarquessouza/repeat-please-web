import React from 'react';
import { useTranslation } from 'react-i18next';
import LogoHeader from '../../assets/svg/LogoHeader';
import { HeaderContainer, ButtonContainer } from './styles';
import { Button } from '../Button';
import { IHeaderProps } from './interfaces';

const Header = ({ onLoginClick }: IHeaderProps) => {
	const { t } = useTranslation();
	return (
		<HeaderContainer>
			<LogoHeader />
			<ButtonContainer>
				<Button onClick={onLoginClick} data-test="header" variant="primary">
					{t('login')}
				</Button>
			</ButtonContainer>
		</HeaderContainer>
	);
};

export default Header;
