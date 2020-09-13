export interface IButtonProps {
	children: string;
	onClick: () => void;
	variant: 'primary' | 'secondary';
	circular?: boolean;
}
