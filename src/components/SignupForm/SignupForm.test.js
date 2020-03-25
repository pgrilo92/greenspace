import React from 'react';
import { render } from '@testing-library/react';
import SignupForm from './SignupForm'


test('renders signup form', () => {
    const { getByText } = render(<SignupForm />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

test('submits form', () => {
    
})