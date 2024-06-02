import styled from "styled-components";

export const StyledTicketCard = styled.article`
    min-width: 100%;
    background-color: rgb(255,255,255);
    border-radius: 3px;
    text-align: start;
    
    section:nth-of-type(1) {
        border-bottom: dotted 1px rgba(0,0,0,.4);
    }

    section:nth-of-type(2) {
        background-color:rgba(0, 0, 0, 0.03);
        padding-bottom: 1.5rem;
    }

    section:nth-of-type(3) {
        background: rgba(0, 0, 0, 0.06);
        border: none;
        display: flex;
    }
    section:nth-of-type(4) {
        background: rgba(0, 0, 0, 0.09);
        padding-bottom: 1rem;
    }
    section:nth-of-type(5) {
        padding: 2rem;
        padding-bottom: .5rem;
        background: rgba(0, 0, 0, 0.12);
    }

    
    section > div {
        flex: 1;
        border-top: dotted 1px rgba(0,0,0,.4);
        border-bottom: dotted 1px rgba(0,0,0,.4);
    }

    section > div:nth-of-type(2) {
        border: dotted 1px rgba(0,0,0,.4);
    }

    h2,h3,h4,h5 {
        padding-left: 1rem;
        margin-bottom: .5rem;
        color: rgba(0,0,0,.6); 
        font-weight: 400;
    }

    h1 {
        padding-left: 1rem;
        font-size: 26px;

    }

    h2 {
        color: rgba(0,0,0,.7); 
        font-size: 18px;
        font-style: normal;
        line-height: 21.6px;
    }

    h3 {
        font-size: 12px;
        line-height: 14.4px; 
    }

    h4 {
        font-size: 18px;
        line-height: 21.6px; 
        text-align: start;
    }

    h5 {
        font-size: 12px;
        line-height: 14.4px; 
    }

    h6 {
        font-family: ${({ theme }) => theme.fonts.barCode};
        font-size: 101px;
        line-height: 101px; 
        text-align: center;
        color: rgba(0,0,0,.8);
        font-weight: 400;
        position: relative;
    }

    h6 > span {
        display: block;
        width: 100%;
        position: absolute; 
        left: 0;
        top: 70%;
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.fira};
        color: rgba(0,0,0,.4); 
        font-size: 12px;
        font-style: normal;
        line-height: 14.4px;
        letter-spacing: .4rem;
    }

    p {
        color: rgba(0,0,0,.4);
        font-family: ${({ theme }) => theme.fonts.fira};
        font-size: 10px;
        line-height: 12px;
        padding: .5rem 1rem;
        text-align: start;
    }

`