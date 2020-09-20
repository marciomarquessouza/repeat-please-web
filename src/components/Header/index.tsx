import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LogoHeader } from '../../assets/svg';
import { HeaderContainer, ButtonContainer } from './styles';
import { Button } from '../Button';
import { IHeaderProps } from './interfaces';

const Header = ({ onLoginClick }: IHeaderProps) => {
	const { t } = useTranslation();

	return (
		<HeaderContainer>
			<Link to="/">
				<LogoHeader />
			</Link>
			<ButtonContainer>
				<Button onClick={onLoginClick} data-test="header" variant="primary">
					{t('login')}
				</Button>
			</ButtonContainer>
		</HeaderContainer>
	);
};

export default Header;
