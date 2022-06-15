import styled from "@emotion/styled/macro";
import Background from "../../../browse imgs & vids/images/misc/joker1.jpg";
export const Container = styled.div``;
export const HeaderContainer = styled.div`
  height: ${({ height }) => height}px;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const HeaderoverLayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 42%);
`;
export const TrailerLink = styled.button`
  background-color: #dc0510;
  border: none;
  color: #fff;
  /* width: 100%;
  height: 100%; */
  border-radius: 3px;
  padding: 10px 20px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    background-color: #c81d25;
  }
`;
export const BrowseFrame = styled.div`
  height: 100px;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 95%;
  margin: 0px auto;
`;
export const BrowseBodyFrame = styled.div`
  display: flex;
  height: calc(100% - 125px);
  /* padding: 25px 0; */
  flex-direction: column;
  justify-content: center;
  align-items: left;
  overflow: hidden;
  width: 95%;
  margin: 0px auto;
`;
export const BrowseLogo = styled.img`
  width: 20rem;
  margin-left: -22px;
  object-fit: cover;
  margin-top: 15px;
  height: 100%;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 15rem;
  }
`;
export const LogLink = styled.a`
  background-color: #dc0510;
  border: none;
  color: #fff;
  width: 100%;
  border-radius: 3px;
  height: 100%;
  padding: 10px 20px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    background-color: #c81d25;
  }
`;
export const RightSideContainer = styled.div``;
export const LeftSideContainer = styled.div``;
export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
`;
export const SubTitle = styled.h4``;
export const Text = styled.p``;
export const MainBrowseContentContainer = styled.div``;
