import React from 'react';
import { Button } from '../../components/Button';
import { signOut } from '../../services/signOutServices';

export const Dashboard = () => (
	<>
		<h1>Dashboard</h1>
		<Button onClick={signOut} variant="primary">
			Sign Out
		</Button>
	</>
);
