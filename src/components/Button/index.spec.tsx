import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '.';
import { IButtonProps } from './interface';
import { findByDataTest } from '../../utils/tests/findByDataTest';

const defaultProps: IButtonProps = {
	children: 'Button',
	onClick: jest.fn(),
	variant: 'primary',
};

const setup = (props: IButtonProps) =>
	shallow(<Button {...props}>{props.children}</Button>);

describe('#ButtonSquare', () => {
	it('renders properly', () => {
		const wrapper = setup(defaultProps);
		expect(wrapper).toMatchSnapshot();
	});

	describe('when the button is pressed', () => {
		it('calls onClick function', () => {
			const wrapper = setup(defaultProps);
			const button = findByDataTest(wrapper, 'button-square');
			button.simulate('click');
			expect(defaultProps.onClick).toHaveBeenCalled();
		});
	});
});
