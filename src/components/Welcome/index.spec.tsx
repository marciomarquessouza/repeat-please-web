import React from 'react';
import { shallow } from 'enzyme';
import { Welcome } from '.';

const setup = () => shallow(<Welcome />);

describe('#Welcome', () => {
	it('renders properly', () => {
		const wrapper = setup();
		expect(wrapper).toMatchSnapshot();
	});
});
