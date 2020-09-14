import React from 'react';
import { InputStyle } from './styles';
import { IInputProps } from './interface';

export const Input = ({
	type,
	id,
	name,
	autoComplete,
	autoFocus,
	placeholder,
	value,
	onChange,
}: IInputProps) => (
	<InputStyle
		type={type}
		id={id}
		name={name}
		autoComplete={autoComplete}
		autoFocus={autoFocus}
		placeholder={placeholder}
		value={value}
		onChange={onChange}
	/>
);
