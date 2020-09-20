import React from 'react';
import { useTranslation } from 'react-i18next';
import { LogoWelcome } from '../../assets/svg';
import { LogoWelcomeContainer, StartButtonContainer } from './styles';
import { Button } from '../Button';

const Welcome = () => {
	const { t } = useTranslation();
	return (
		<>
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
		</>
	);
};

export default Welcome;
