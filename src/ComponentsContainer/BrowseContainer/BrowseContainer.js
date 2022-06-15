import React, { useContext, useState } from "react";
import Browse from "../../components/Browse/Browse";
import Logo from "../../images/Logo/logo_transparent.png";
import { auth } from "../../lib/firebase.prod";
import { useNavigate, useParams } from "react-router-dom";
import * as Routes from "../../Constants/router";
import { isLoggedInContext } from "../../context/FirebaseContext";
import MovieTrailerModal from "../../TrailersModal/MovieTrailerModal";
import BrowseCard from "../../components/BrowseCards/BrowseCard";
function BrowseContainer({ FilterData }) {
  const [OpenModal, setOpenModal] = useState(false);
  // console.log(FilterData.films);
  const { films, series } = FilterData;
  const { user, setuser } = useContext(isLoggedInContext);
  const Navigate = useNavigate();
  const HandleLogout = () => {
    auth.signOut();
    setuser(null);
    Navigate(Routes.HOME);
  };
  const HandleOpenModal = () => {
    setOpenModal(true);
  };
  const GetData = films.map((film) => {
    const {data} = film
    return <BrowseCard Film={film} />;
  });
  const WindowHeight = window.innerHeight;
  return (
    <>
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
                lives with and cares for his mother, Penny, in crime-ridden
                Gotham City amidst a recession. Arthur suffers from a
                neurological disorder that causes him to laugh uncontrollably at
                inappropriate times, requiring medication.
              </Browse.Text>
              <div>
                <Browse.TrailerBtn onClick={() => HandleOpenModal()}>
                  See Movie Trailer
                </Browse.TrailerBtn>
              </div>
            </Browse.BodyFrame>
          </Browse.BrowseOverLay>
        </Browse.BrowseMainContainer>
      </Browse>
      {GetData}
      <MovieTrailerModal isOpen={OpenModal} onClose={setOpenModal} />
    </>
  );
}

export default BrowseContainer;
