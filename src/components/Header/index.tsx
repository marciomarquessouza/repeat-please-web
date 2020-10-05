import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LogoMonkeyHead, LogoTitle } from '../../assets/svg';
import {
	HeaderContainer,
	ButtonContainer,
	LogoContainer,
	LogoTitleContainer,
} from './styles';
import { Button } from '../Button';
import { IHeaderProps } from './interfaces';

export const Header = ({ onLoginClick }: IHeaderProps) => {
	const { t } = useTranslation();

	return (
		<HeaderContainer>
			<Link to="/">
				<LogoContainer>
					<LogoMonkeyHead />
					<LogoTitleContainer>
						<LogoTitle />
					</LogoTitleContainer>
				</LogoContainer>
			</Link>
			<ButtonContainer>
				<Button onClick={onLoginClick} data-test="header" variant="primary">
					{t('login')}
				</Button>
			</ButtonContainer>
		</HeaderContainer>
	);
};
