import React from 'react';
import ReactDOM from 'react-dom';
import JestMock from 'jest-mock';
import { shallow } from 'enzyme'
import ImageModal from '../../Components/smallComponents/ImageModal';
import { LungisaProfile } from '../../Resources/LungisaProfile.jpg'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<imageModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let container;
let imageUrl;
let closeFn = JestMock.fn();

beforeEach(()=> {
    container = shallow(<ImageModal imageUrl={LungisaProfile} show={true} onClose={closeFn} />);
})

test('should call a function you click outside the modal or the close button', () => {
    
})

test('should show nothing when closed', () => {
    
})


test('should show the image passed to it', () => {
    
})
