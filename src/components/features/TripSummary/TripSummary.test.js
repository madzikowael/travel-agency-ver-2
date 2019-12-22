import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('propsId have to correct id=abc', () => {
    const propsId = 'abc';
    const component = shallow(<TripSummary id={propsId} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${propsId}`);
  });

  it('image should have correct src and alt', () => {
    const correctAlt = 'text';
    const correctSrc = 'image';
    const component = shallow(<TripSummary name={correctAlt} image={correctSrc} />);
    expect(component.find('img').prop('src')).toEqual(correctSrc);
    expect(component.find('img').prop('alt')).toEqual(correctAlt);
  });

  it('should render correct props name, cost and days', () => {
    const component = shallow(<TripSummary days={10} name='Lorem Ipsum' cost='100' />);
    expect(component.find('.details span').at(0).text()).toEqual(`${10} days`);
    expect(component.find('.details span').at(1).text()).toEqual(`from ${'100'}`);
    expect(component.find('.title').text()).toEqual('Lorem Ipsum');
  });

  it('should render tags array correctly', () => {
    const expectedArray = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={expectedArray} />);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedArray[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedArray[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedArray[2]);
  });

  it('should render tags div if tags is truthy', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('.tags')).toBeTruthy();
  });
});
