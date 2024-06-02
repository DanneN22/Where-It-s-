import styled from "styled-components";

export const StyledPageIndicator = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    position: fixed; 
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 0 .4rem .4rem rgba(35, 31, 66, 1); 
    padding-bottom: .25rem;
`