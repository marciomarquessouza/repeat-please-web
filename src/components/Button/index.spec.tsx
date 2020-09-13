import React from 'react';
import { shallow } from 'enzyme';
import { ButtonSquare } from '.';
import { IButtonSquareProps } from './interface';
import { findByDataTest } from '../../utils/tests/findByDataTest';

const defaultProps: IButtonSquareProps = {
	children: 'Button',
	onClick: jest.fn(),
};

const setup = (props: IButtonSquareProps) =>
	shallow(<ButtonSquare {...props}>{props.children}</ButtonSquare>);

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
