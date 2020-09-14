export interface IInputProps {
	type: 'email' | 'password' | 'text' | 'number';
	id?: string;
	name?: string;
	autoComplete?: 'on' | 'off';
	autoFocus?: boolean;
	placeholder?: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
