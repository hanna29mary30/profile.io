import React from 'react';
import { render } from '@testing-library/react';
import NewsCards from './Newscards';

describe('NewsCards component', () => {
  it('renders loading message when no articles are provided', () => {
    const { getByText } = render(<NewsCards articles={[]} />);
    
    const loadingMessage = getByText('NEWSAPP');
    expect(loadingMessage).toBeInTheDocument();
  });
  
 







  
});
