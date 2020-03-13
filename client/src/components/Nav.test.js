import React from 'react';
import {render, getByTestId, fireEvent} from '@testing-library/react';
import Nav from './Nav';

test('renders correctly!', ()=>{
    render(<Nav/>);
});

test ('dark mode works' , () => {
    const {getByTestId}=render(<Nav/>);
    const darkMode= getByTestId('dm');
    fireEvent.click(darkMode);

});