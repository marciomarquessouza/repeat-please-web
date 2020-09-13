import React from 'react';
import Header from '../../components/Header';
import Welcome from '../../components/Welcome';

const Onboarding = () => {
	return (
		<>
			<Header onLoginClick={() => undefined} />
			<Welcome />
			<h1>Footer</h1>
		</>
	);
};

export default Onboarding;
