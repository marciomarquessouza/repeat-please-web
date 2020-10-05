import React from 'react';
import {
	FooterContainer,
	CardContainer,
	CardLeft,
	CardRight,
	CardTitle,
	CardBody,
} from './styles';
import { SadMonkey, WhatMonkey, HappyMonkey } from '../../assets/svg';
import { useTranslation } from 'react-i18next';

const footerContent = [
	{
		image: <SadMonkey />,
		title: 'footerTitleSadTitle',
		body: 'footerTitleSadBody',
	},
	{
		image: <WhatMonkey />,
		title: 'footerTitleWhatTitle',
		body: 'footerTitleWhatBody',
	},
	{
		image: <HappyMonkey />,
		title: 'footerTitleHappyTitle',
		body: 'footerTitleHappyBody',
	},
];

export const Footer = () => {
	const { t } = useTranslation();
	return (
		<FooterContainer>
			{footerContent.map((footer) => (
				<CardContainer key={footer.title}>
					<CardLeft>{footer.image}</CardLeft>
					<CardRight>
						<CardTitle>{t(footer.title)}</CardTitle>
						<CardBody>{t(footer.body)}</CardBody>
					</CardRight>
				</CardContainer>
			))}
		</FooterContainer>
	);
};
