import React, { useContext } from "react";
import Browse from "../../components/Browse/Browse";
import Logo from "../../images/Logo/logo_transparent.png";
import { auth } from "../../lib/firebase.prod";
import { useNavigate, useParams } from "react-router-dom";
import * as Routes from "../../Constants/router";
import { isLoggedInContext } from "../../context/FirebaseContext";
import { Column } from "../../components/Footer/styles/Footer-style";
function BrowseContainer({ FilterData }) {
  // console.log(FilterData.films);
  const { films, series } = FilterData;
  const { user, setuser } = useContext(isLoggedInContext);
  const Navigate = useNavigate();
  const HandleLogout = () => {
    auth.signOut();
    setuser(null);
    Navigate(Routes.HOME);
  };
  const WindowHeight = window.innerHeight - 100;
  return (
    <Browse>
      <Browse.BrowseMainContainer height={WindowHeight}>
        <Browse.BrowseOverLay>
          <Browse.Frame direction={"row"}>
            <Browse.LeftSideContainer>
              <Browse.Logo src={Logo}></Browse.Logo>
            </Browse.LeftSideContainer>
            <Browse.RightSideContainer>
              <Browse.LogoutLink onClick={HandleLogout}>
                Log out
              </Browse.LogoutLink>
            </Browse.RightSideContainer>
          </Browse.Frame>
          <Browse.BodyFrame>
            <Browse.Title>Watch Joker Now</Browse.Title>
            <Browse.Text>
              In 1981, party clown and aspiring stand-up comedian Arthur Fleck
              lives with and cares for his mother, Penny, in crime-ridden Gotham
              City amidst a recession. Arthur suffers from a neurological
              disorder that causes him to laugh uncontrollably at inappropriate
              times, requiring medication.
            </Browse.Text>
          </Browse.BodyFrame>
        </Browse.BrowseOverLay>
      </Browse.BrowseMainContainer>
    </Browse>
  );
}

export default BrowseContainer;
