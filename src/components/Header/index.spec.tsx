import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '.';
import { IHeaderProps } from './interfaces';
import { findByDataTest } from '../../utils/tests/findByDataTest';

const setup = (props: IHeaderProps) => shallow(<Header {...props} />);

describe('#Header', () => {
	it('renders properly', () => {
		const wrapper = setup({ onLoginClick: jest.fn() });
		expect(wrapper).toMatchSnapshot();
	});

	describe('when the login button is pressed', () => {
		it('calls onLoginClick function', () => {
			const onLoginClick = jest.fn();
			const wrapper = setup({ onLoginClick });
			const header = findByDataTest(wrapper, 'header');
			header.simulate('click');
			expect(onLoginClick).toHaveBeenCalled();
		});
	});
});
