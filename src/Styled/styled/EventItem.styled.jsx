import styled from "styled-components";

export const StyledEventItem = styled.article`
    display: flex; 
    gap: 1rem; 
    align-items: flex-end; 
    justify-content: center;
    width: 100%;
    margin-bottom: 1.5rem; 

    &:hover > section:first-of-type {
        box-shadow: inset 0 0 4px rgba(255,255,255,.5);
    }

    &:hover > section:last-of-type {
        border-bottom: 1px solid rgba(255,255,255,1);
       
    }

    section:first-of-type {
        border: 1px solid rgb(255,255,255);
        color: rgb(255,255,255); 
        min-width: 59px; 
        padding: 1rem 1.25rem;
        
        text-align: center;
        font-size: 14px; 
        font-family:${({ theme }) => theme.fonts.fira}; 
        font-weight: 700;
        line-height: 16.8px;
    }

    span {
        display: block;
        font-size: 10px; 
        line-height: 12px;
    }

    section:last-of-type {
        display: flex; 
        align-items: flex-start;
        flex-direction: column;
        border-bottom: 1px solid rgba(255,255,255,.3);
        width: 100%;
        padding-bottom: .25rem;
        transition: all .3s ease-in-out;
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: space-between;
    }

    div > div {
         flex: 1; 
        flex-direction: column; 
        text-align: start;
        gap: .15rem;

    }

    h2 {
        font-style: normal;
        font-size: 22px
        line-height: 26.4px;
        text-shadow: 1px 1px ${({ theme }) => theme.colors.accentPink};
        margin-bottom: .25rem;
    }
    
    h3 {
        margin-top: auto;
        margin-bottom: 0;
        font-size: 17px;
        line-height: 20.4px;
        color: ${({ theme }) => theme.colors.accentBlue}; 
    }

    h4 {
        font-size: 12px;
        line-height: 14.4px;
        color: rgba(255,255,255,.8);  
    }

    h5 {
        font-size: 14px;
        line-height: 16.8px;
        color: rgb(208,208,208);
    }
`