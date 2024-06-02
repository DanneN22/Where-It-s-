import styled from "styled-components";

export const StyledSingleEventItem = styled.article`
text-align: center;
margin: 2rem; 

h2 {
    color: ${({ theme }) => theme.colors.accentPink};
    font-size: 35px;
    line-height: 40.78px;
    font-style: normal;
    font-family: ${({ theme }) => theme.fonts.sansita};
    margin-bottom: .5rem;
}

h3 {
    font-size: 19px;
    line-height: 22.8px;
    color: ${({ theme }) => theme.colors.accentBlue}; 
    margin-bottom: .5rem;
}

h4 {
    font-style: italic;
    font-size: 1rem;
    line-height: 19.2px;
    color: rgba(255,255,255,.7); 
    margin-bottom: 4rem;
}
`