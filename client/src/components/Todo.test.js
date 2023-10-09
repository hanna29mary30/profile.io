import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Todo from './Todos.js';
describe('Todo Component', () => {
  

  it('renders the Todo component', () => {
    render(<Todo />);
    const todoTitle = screen.getByText('Todo App');
    expect(todoTitle).toBeInTheDocument();
  });

 
 
});
