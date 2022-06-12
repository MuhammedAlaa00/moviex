import styled from "styled-components/macro";
export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 20px;
    @media (max-width: 1000px) {
        width: 85%;
    }
`
export const Title = styled.h2`
    color: #fffffffa;
    font-size: 2rem;
    @media (min-width: 1000px) {
        font-size: 3rem;
    }
`
/*************************************************************************/
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const Inner = styled.div`
    width: 100%;
`
export const AccordionContainer = styled.div`
`
export const AccordionTitle = styled.h2`
    text-align: center;
    color: #fff;
    padding: 15px;
`
export const AccordionItem = styled.div`
    width: 60%;
    margin: auto;
    margin-bottom: 10px;
    @media (max-width:800px) {
        width: 96%;
    }
`
export const AccordionHeader = styled.div`
    justify-content: space-between;
    display: flex;
    padding: 15px;
    background-color: #3a3939;
    border-bottom: 1px solid #fff;
    cursor: pointer;
`
export const AccordionBody = styled.div`
    color: #fff;
    background-color: #3a3939;
    padding:0 15px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    &.collapsed {
        max-height: 0;
        transition: max-height .25s cubic-bezier(0,1,0,1);
    }
    &.expanded {
        max-height: 300px;
        transition: max-height .25s cubic-bezier(0,1,0,1);
        padding: 15px 15px;
    }
`
