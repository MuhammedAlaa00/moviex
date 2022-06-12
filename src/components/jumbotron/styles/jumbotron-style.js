import styled from "styled-components/macro";
export const Inner = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: ${({direction})=>direction};
    width: 90%;
    margin: auto;
    padding: 25px 0;
    @media (max-width:1000px) {
        flex-direction: column;
    }
`
export const Container = styled.div`
    overflow: hidden;
    padding: 100px 0;
    @media (max-width:1000px) {
        ${Inner} : last-of-type img {
            margin-top: 20px;
        }
    }
`
export const Title = styled.h3`
    color: #fff;
    font-size: 2rem;
    margin:5px 0;
    @media (min-width: 320px) and (max-width:767px) {
        font-size: 1.2rem;
    }
`
export const Image = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: contain;
`
export const P = styled.p`
    color : #EDF7F6;
    margin: 0;
`
export const T = styled.div`
`