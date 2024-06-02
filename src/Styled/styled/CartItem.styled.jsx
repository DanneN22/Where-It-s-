import styled from "styled-components"

export const StyledCartItem = styled.section`
    width: 100%;
    border: solid 2px ${({ theme }) => theme.colors.accentPink};
    padding-top: 1rem;
    border-radius: 3px;

    h4 {
        color: ${({ theme }) => theme.colors.accentPink}; 
        font-size: 24px;
        line-height: 27.96px;
        font-family: ${({ theme }) => theme.fonts.sansita};
        padding-left: .5rem;
    }

    h5 {
        color: ${({ theme }) => theme.colors.accentBlue}; 
        font-size: 14px;
        line-height: 16.8px;
        padding-left: .5rem;
        margin-bottom: .5rem;
    }
    
    h6 {
        font-size: 2rem;
        text-shadow: 1px 1px ${({ theme }) => theme.colors.accentPink};
        padding-bottom: 1rem; 
    }

    div {
        display: flex; 
        border-top: 1px solid ${({ theme }) => theme.colors.accentPink};
    }

    div > button {
        flex: 1; 
        border: none;
        background: none;
    }

    div > button:nth-of-type(1) {
        border-right: 1px solid ${({ theme }) => theme.colors.accentPink};
    }

    div > button:nth-of-type(2) {
        border-left: 1px solid ${({ theme }) => theme.colors.accentPink};
    }

    div > p {
        flex: 2;
        font-size: 28px;
        line-height: 39.2px;
        text-align: center;
    }
`