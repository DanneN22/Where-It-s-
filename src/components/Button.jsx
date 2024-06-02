import React from 'react'
import { Link } from 'react-router-dom'
import { StyledButton } from '../Styled/styled/Button.styled.jsx'

export default function Button({ value, path, click = null }) {
    return (
        <Link to={path} style={{ width: '100%', marginTop: 'auto', marginBottom: '0' }} onClick={click}>
            <StyledButton>
                {value}
            </StyledButton>
        </Link>
    )
}