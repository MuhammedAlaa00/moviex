import React from "react";
import {
  Container,
  HeaderContainer,
  HeaderoverLayContainer,
  BrowseLogo,
  LogLink,
  RightSideContainer,
  LeftSideContainer,
  MainBrowseContentContainer,
  BrowseFrame,
  BrowseBodyFrame,
  TrailerLink,
  Title,
  SubTitle,
  Text,
} from "./style/Browse-style";
// import {Link} from 'react-router-dom';
function Browse({ children, ...restprops }) {
//   console.log(restprops.height);
  return <Container {...restprops}>{children}</Container>;
}
Browse.BrowseMainContainer = function Browsemaincontainer({
  children,
  ...restprops
}) {
  return <HeaderContainer {...restprops}>{children}</HeaderContainer>;
};
Browse.BrowseOverLay = function Browseoverlay({ children, ...restprops }) {
  return (
    <HeaderoverLayContainer {...restprops}>{children}</HeaderoverLayContainer>
  );
};
Browse.Frame = function browseFrame({ children, ...restprops }) {
//   console.log(restprops.direction);
  return <BrowseFrame {...restprops}>{children}</BrowseFrame>;
};
Browse.BodyFrame = function browseBodyFrame({ children, ...restprops }) {
  //   console.log(restprops.direction);
  return <BrowseBodyFrame {...restprops}>{children}</BrowseBodyFrame>;
};
Browse.Logo = function browseLogo({ ...restprops }) {
  return <BrowseLogo {...restprops} />;
};
Browse.LogoutLink = function logouLink({ children, ...restprops }) {
  return <LogLink {...restprops}>{children}</LogLink>;
};
Browse.TrailerBtn  = function trailerBtn ({children , ...restprops})
{
  return <TrailerLink {...restprops}>{children}</TrailerLink>
}
Browse.RightSideContainer = function rightsideContainer({
  children,
  ...restprops
}) {
  return <RightSideContainer>{children}</RightSideContainer>;
};
Browse.LeftSideContainer = function leftsideContainer({
  children,
  ...restprops
}) {
  return <LeftSideContainer>{children}</LeftSideContainer>;
};
Browse.MainHomeContentContainer = function mainContentContainer({
  children,
  ...restprops
}) {
  return <MainBrowseContentContainer>{children}</MainBrowseContentContainer>;
};
Browse.Title = function title({ children, ...restprops }) {
  return <Title marginTop={restprops.marginTop}>{children}</Title>;
};
Browse.SubTitle = function subtitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};
Browse.Text = function text({ children }) {
  return <Text>{children}</Text>;
};
export default Browse;
