import { ShallowWrapper } from 'enzyme';

export const findByDataTest = (wrapper: ShallowWrapper, dataTest: string) => {
	return wrapper.find(`[data-test="${dataTest}"]`);
};
