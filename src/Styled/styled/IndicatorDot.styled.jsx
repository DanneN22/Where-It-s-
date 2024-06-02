import styled from "styled-components";

export const StyledIndicatorDot = styled.div`
    color: rgba(255,255,255,.3);
    text-decoration: none;
    font-size: 1.1rem;
    padding: .75rem 2rem;
    transition: all .2s ease-in-out;

    &:hover {
        box-shadow: inset 0 0 .2rem rgba(255,255,255, .2);
        color: rgba(255,255,255,.8);
    }
`