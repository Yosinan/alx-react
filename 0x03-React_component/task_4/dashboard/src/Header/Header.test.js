import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import Header from './Header'; // Import the Header component

test('renders img and h1 tags', () => {
    // Render the Header component
    const { getByRole } = render(<Header />);
    
    // Get the img and h1 elements by their roles
    const imgElement = getByRole('img');
    const h1Element = getByRole('heading', { level: 1 });
    
    expect(imgElement).toBeInTheDocument();
    expect(h1Element).toBeInTheDocument();
  });
  