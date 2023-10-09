import React from 'react';
import { render } from '@testing-library/react';
import NewsCards from './Newscards';

describe('NewsCards component', () => {
  it('renders loading message when no articles are provided', () => {
    const { getByText } = render(<NewsCards articles={[]} />);
    
    const loadingMessage = getByText('NEWSAPP');
    expect(loadingMessage).toBeInTheDocument();
  });
  
  it('renders articles when articles are provided', () => {
    const mockArticles = [
      
      { id: 1, title: 'Article 1', content: 'Content 1' },
      { id: 2, title: 'Article 2', content: 'Content 2' },
     
    ];

    const { getAllByTestId } = render(
      <NewsCards articles={articles} />
    );

   
    const articleCards = getAllByTestId('article-card');
    expect(articleCards.length).toBe(mockArticles.length);
  });







  
});
