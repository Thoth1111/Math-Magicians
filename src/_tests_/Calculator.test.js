import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('Calculator', () => {
    it('renders the calculator UI', () => {
        render(<Calculator />);
        expect(screen.getAllByRole('button')).toHaveLength(19);
    });
    it('renders the go-time text', () => {
        render(<Calculator />);
        expect(screen.getByText(/It's Math Time!!/)).toBeInTheDocument();
    })
});