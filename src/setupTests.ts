/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: any) => key,
	}),
}));
