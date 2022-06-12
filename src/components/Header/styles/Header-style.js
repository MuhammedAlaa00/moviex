import styled from "styled-components/macro";
import backGround from '../../../images/home-bg.jpg'
export const Container = styled.div`
    width: 100%;
    height: ${({height}) => height}px;
    background-image: url(${backGround});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    &.SignContainer{
        @media (min-width: 320px) and (max-width:771px) {
            background-image: none;
        }        
    }
`
export const HeaderFrame = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;    
    overflow: hidden;
    width: 95%;
    margin: 0px auto;

`
export const HeaderLogo = styled.img`
    width: 20rem;
    margin-left: -22px;
    object-fit: cover;
    margin-top: 15px;
    @media (min-width: 320px) and (max-width:767px) {
        width:15rem
    }
`
export const MainHomeContentContainer = styled.div`
    margin:auto
`
export const LogLink = styled.a`
`
export const RightSideContainer = styled.div`
`
export const Title = styled.h3`
    text-align: center;
    font-size: 3rem;
    width: 50%;
    margin: auto;
    @media (min-width: 320px) and (max-width:771px) {
        width: 96%;
        font-size: 1.5rem;
    }
    @media (min-width:771px) {
        width: 60%;
    }
    /* @media (min-width: 991px) {
        width: 40%;
    } */
`
export const SubTitle = styled.h4`
    text-align: center;
    font-size: 1.5rem;
    width: 50%;
    margin: auto;
    margin-top: 1%;
    @media (min-width: 320px) and (max-width:771px) {
        width: 96%;
        font-size: 1rem;
    }
    @media (min-width:771px) {
        width: 60%;
    }
    /* @media (min-width: 991px) {
        width: 40%;
    } */
`