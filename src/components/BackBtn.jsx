import React from 'react'
import { StyledBackBtn } from '../Styled/styled/BackBtn.styled.jsx'
import { RiArrowGoBackLine } from "react-icons/ri";

import { Link } from 'react-router-dom';

export default function BackBtn() {
    return (
        <Link to='/' aria-label='link to events'>
            <StyledBackBtn aria-label='button to go back'>
                <RiArrowGoBackLine
                    size={'32px'}
                    color={'white'}
                />
            </StyledBackBtn>
        </Link>
    )
}