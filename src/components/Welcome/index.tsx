import React from 'react';
import { useTranslation } from 'react-i18next';
import LogoWelcome from '../../assets/svg/LogoWelcome';
import {
	WelcomeContainer,
	LogoWelcomeContainer,
	StartButtonContainer,
} from './styles';
import { Button } from '../Button';

const Welcome = () => {
	const { t } = useTranslation();
	return (
		<WelcomeContainer>
			<LogoWelcomeContainer>
				<LogoWelcome />
			</LogoWelcomeContainer>
			<StartButtonContainer>
				<Button
					onClick={() => undefined}
					variant="secondary"
					data-test="start-now">
					{t('startNow')}
				</Button>
			</StartButtonContainer>
		</WelcomeContainer>
	);
};

export default Welcome;
