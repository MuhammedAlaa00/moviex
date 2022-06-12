import styled from "@emotion/styled/macro";
export const Container = styled.div`
    background-color: rgba(0,0,0,.75);
    padding: 15px 30px;
    width: 35%;
    margin: 10px auto;
    height: 70%;
    display: flex;
    flex-direction: column;
    @media (min-width: 320px) and (max-width:767px) {
        width: 100%;
        background-color: transparent;
        margin:auto;
        height: auto;
        padding: 0px;
    }
    @media (min-width: 768px) and (max-width:991px) {
        width: 50%;
    }
`