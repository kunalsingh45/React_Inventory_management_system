import { render,screen } from '@testing-library/react';
import React from 'react';
import  InventoryList from './InventoryList';

    test('InventoryList Component', () => {
        render(<InventoryList />);
        const Name =screen.getByText("Add Warehouse");
        expect(Name).toBeInTheDocument();
    });



