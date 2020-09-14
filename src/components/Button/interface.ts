export interface IButtonProps {
	children: string;
	onClick?: () => void;
	variant: 'primary' | 'secondary' | 'rounded';
	type?: 'button' | 'submit' | 'reset';
}
