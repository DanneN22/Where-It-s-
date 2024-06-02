import styled from "styled-components";

export const StyledSearchField = styled.form`
    display: flex;
    border-radius: 3px; 
    overflow: hidden;
    width: 100%;
    margin: 2rem 0 2.5rem;

    input[type=text],
    button {
        border: none;
        background-color: rgba(255,255,255, .1); 
    }

    input[type='text'] {
        width: 100%;
        color: rgba(255,255,255, .8);
        padding: .75rem;
    }

    button {
        padding: .75rem; 
        padding-bottom: .5rem; 
        color: rgba(255,255,255, .2);
        cursor: pointer;
        transition: all .3s ease-in-out;
    }

    button:hover, 
    button:focus,
    button:active {
        color: rgba(255,255,255, .8);
    }
`