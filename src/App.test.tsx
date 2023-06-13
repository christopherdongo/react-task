
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './app';
import { NavbarTask} from './components/NavbarTask';
import {SignupButton} from './components/buttons/SignupButton';

/*
test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.get(/Loading/);
    expect(linkElement).toBeInTheDocument();
  });
  */

  //comprobar los child del elemento
  it('Renders with a className equal to the variant', () => {
    const { container } = render(<NavbarTask />)
    expect(container.firstChild) // Check for className here
})

//comprobar el titulo del navbar
test('Title navbar', () => {
       render(<NavbarTask />)
       const element = screen.getByText(/lista de tareas/i)
       expect(element).toBeInTheDocument() // Check for className here
}) 

//comprobar el onclick del button
test('click button signup', () => {
    render(<SignupButton />);
    
    const button = screen.getByRole('button');
    userEvent.click(button);
})
