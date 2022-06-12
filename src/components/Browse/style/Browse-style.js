import styled from "@emotion/styled/macro";
import Background from '../../../browse imgs & vids/images/misc/joker1.jpg'
export const Container = styled.div``
export const HeaderContainer = styled.div`
    height: ${({height}) => height}px;
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    display: flex;
    
`
export const BrowseFrame = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;    
    overflow: hidden;
    width: 95%;
    margin: 0px auto;
`
export const BrowseLogo = styled.img`
    width: 20rem;
    margin-left: -22px;
    object-fit: cover;
    margin-top: 15px;
    height: 100%;
    @media (min-width: 320px) and (max-width:767px) {
        width:15rem
    }
`
export const LogLink = styled.a`
    background-color: #DC0510;
    border: none;
    color: #fff;
    width: 100%;
    border-radius: 3px;
    height: 100%;
    padding: 10px 20px;
    transition: all .4s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    font-weight: 700;
    &:hover{
        background-color:#C81D25;
    }
`
export const RightSideContainer = styled.div``
export const LeftSideContainer = styled.div``
export const Title = styled.h3``

export const SubTitle = styled.h4``
export const MainBrowseContentContainer = styled.div``