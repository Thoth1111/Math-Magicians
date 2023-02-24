import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import Calculator from '../components/calculator';
import CalcButton from '../components/calc-button';

describe('Calculator display', () => {
    it('renders the go-time text', () => {
        render(<Calculator />);
        expect(screen.getByText(/It's Math Time!!/)).toBeInTheDocument();
    })
    it('renders all the calculator UI buttons', () => {
        render(<Calculator />);
        expect(screen.getAllByRole('button')).toHaveLength(19);
    });
    it('renders the complete UI correctly', () => {
        const tree =  renderer.create(<Calculator />).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});

describe('Calculator interaction', () => {
    it('calls the handleButtonClick function', () => {
        const handleButtonClick = jest.fn();
        render(<CalcButton value="AC" onClick={handleButtonClick} />);
        userEvent.click(screen.getByText('AC'));
        expect(handleButtonClick).toHaveBeenCalled();
    });
    it('calls the handleButtonClick function', () => {
        const handleButtonClick = jest.fn();
        render(<CalcButton value="7" onClick={handleButtonClick} />);
        userEvent.click(screen.getByText('7'));
        expect(handleButtonClick).toHaveBeenCalled();
    });
    it('calls the handleButtonClick function', () => {
        const handleButtonClick = jest.fn();
        render(<CalcButton value="4" onClick={handleButtonClick} />);
        userEvent.click(screen.getByText('4'));
        expect(handleButtonClick).toHaveBeenCalled();
    });
    it('calls the handleEqualsClick function', () => {
        const handleEqualsClick = jest.fn();
        render(<CalcButton value="=" onClick={() => handleEqualsClick()} />);
        userEvent.click(screen.getByText('='));
        expect(handleEqualsClick).toHaveBeenCalled();
    });

})


