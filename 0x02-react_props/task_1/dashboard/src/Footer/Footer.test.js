import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
    it('renders without crashing', () => {
      // Shallow render the Footer component
      const wrapper = shallow(<Footer />);
      expect(wrapper.exists()).toBe(true);
    });
  
    it('renders the text "Copyright"', () => {
      // Shallow render the Footer component
      const wrapper = shallow(<Footer />);
      const textContent = wrapper.text();
      
      expect(textContent).toContain('Copyright');
    });
  });
  