import React from 'react'
import { StyledSearchField } from '../Styled/styled/SearchField.styled.jsx'

// Icons 
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchField() {

    return (
        <StyledSearchField>
            <button aria-label='search button for event search'>
                <FaMagnifyingGlass
                    size={'25px'}
                />
            </button>
            <input type="text" aria-label='search bar for event search' />
        </StyledSearchField>
    )
}