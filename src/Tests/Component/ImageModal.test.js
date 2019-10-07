import React from 'react';
import { shallow } from 'enzyme';
import ImageModal from '../../Components/smallComponents/ImageModal';

describe('Modal', () => {
  it('renders nothing when closed', () => {
    expect(shallow(
      <ImageModal onClose={jest.fn()}/>
    )).toMatchSnapshot();
  });

  it('renders when open', () => {
    expect(shallow(
      <ImageModal show={true} onClose={jest.fn()}/>
    )).toMatchSnapshot();
  });

  it('calls onClose when button is clicked', () => {
    const onClose = jest.fn();
    const wrapper = shallow(
      <ImageModal show={true} onClose={onClose}/>
    );

    wrapper.find('button').simulate('click');
    expect(onClose).toBeCalled();
  });
});