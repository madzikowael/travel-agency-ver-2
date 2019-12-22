import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='test of Type' name='test of name' />);
    expect(component).toBeTruthy();
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  it('should show content of props name', () => {
    const expectedName = 'Expected Name';
    const component = shallow(<OrderOption name={expectedName} type={'dropdown'} />);

    expect(component.find('.title').text()).toEqual(expectedName);
  });
});
