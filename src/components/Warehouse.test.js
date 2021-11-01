import { render,screen } from '@testing-library/react';
import React from 'react';
import  Warehouse from './Warehouse'
import userEvent from '@testing-library/user-event';
import DialogBox from './DialogBox';

    test('Warehouse Component', () => {
        render(<Warehouse />);
        const Name =screen.getByText("Name");
        expect(Name).toBeInTheDocument();
    });

    test('Warehouse Component button Click', async() => {
        render(<Warehouse />);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        render(<DialogBox />);
        const dialogElements = screen.getByText('Message');
        expect(dialogElements).toBeInTheDocument();
    });


