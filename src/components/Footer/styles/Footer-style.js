import styled from "styled-components/macro";
export const Container = styled.div`
    display: flex;
    width: 90%;
    margin: auto;
    flex-direction: column;
    padding: 70px 56px;
    @media (max-width:1000px){
        padding: 70px 15px;
    }
`
// export const Row = styled.div`

// `
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`
export const Link = styled.a`
    text-decoration: none;
    color: #72707081;
    margin: 2px 0;
    font-size: 15px;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    &:hover{
        color: #C81D25;
    }
`
export const Title = styled.p`
    color: #72707081;
    margin: 30px 0;
`
export const Text = styled.p`
    color: #72707081;
`
export const Break = styled.p`
 flex-basis: 100%;
 height: 0;
`