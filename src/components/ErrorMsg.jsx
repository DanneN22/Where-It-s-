import React from 'react'
import { StyledErrorMsg } from '../Styled/styled/ErrorMsg.styled.jsx'

export default function ErrorMsg({ value }) {
    return (
        <StyledErrorMsg>
            {value}
        </StyledErrorMsg>
    )
}