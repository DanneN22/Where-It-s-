import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 1rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.accentBlue};
    color: rgb(255,255,255);
    border-radius: 3px;
    border: none;
    font-size: 1.37rem;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.fira};
    margin-bottom: 1rem;
    transition: all .2s ease-in-out;
    cursor: pointer; 

    &:hover {
        box-shadow: inset 0 0 .5rem rgba(0,0,0,.4)
    }
`