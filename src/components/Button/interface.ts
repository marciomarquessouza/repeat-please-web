export interface IButtonProps {
	children: any;
	onClick?: () => void;
	variant: 'primary' | 'secondary' | 'rounded';
	type?: 'button' | 'submit' | 'reset';
	loading?: boolean;
}
