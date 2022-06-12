import styled from 'styled-components/macro'

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`
export const Inner = styled.div `
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    @media (min-width: 320px) {
        width: 96%;
    }
    @media (min-width:771px) {
        width: 60%;
    }
    /* @media (min-width: 991px) {
        width: 40%;
    } */
`
export const InputContainer = styled.div`
    width: 70%;
    position: relative;
`
export const Input = styled.input`
    color: #000;
    width: 100%;
    padding: 20px 10px;
    font-size: 18px;
    outline: none;
    border: 1px solid #fff;
    border-radius: 0;
    @media (min-width: 320px) and (max-width:767px) {
        padding: 15px 10px;
    }
`
export const Label = styled.label`
    position: absolute;
    align-items: center;
    display: flex;
    padding: 0 0 0 10px;
    color: #8c8c8c;
    font-size: 14px;
    font-weight: bold;
    transition: font .1s ease,top .1s ease,-webkit-transform .1s ease;
    &.focused {
        top: 7px;
        font-size: 12px;
    }
    &.notfocused{
        top: 40%;
         @media (min-width: 320px) and (max-width:767px) {
            top: 37%;
        }
    }
`
export const ButtonContainer = styled.div`
    width: 30%;
    margin-left: 22px;
`
export const Button = styled.button`
    background-color: #DC0510;
    border: none;
    color: #fff;
    width: 100%;
    height: 100%;
    /* padding: 20px; */
    transition: all .4s ease-in-out;
    cursor: pointer;
    &:hover{
        background-color:#C81D25;
    }
`
export const P = styled.p`
font-size: 19px;
margin: auto;
text-align: center;
margin-top: 2%;

@media (min-width: 320px) and (max-width:767px) {
        width: 96%;
        font-size: 15px;
    }
`