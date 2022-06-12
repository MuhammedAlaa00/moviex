import React from 'react';
import {Container,
     HeaderContainer, 
     BrowseLogo,
     LogLink,
     RightSideContainer,
     LeftSideContainer,
     MainBrowseContentContainer,
     BrowseFrame,
     Title,
     SubTitle
} from './style/Browse-style'
// import {Link} from 'react-router-dom';
function Browse({series,children, ...restprops}) {
    console.log(restprops.height);
  return (
    <Container {...restprops}>
        {children}
    </Container>
  )
}
Browse.BrowseMainContainer = function Browsemaincontainer ({children , ...restprops}) {
    return (
        <HeaderContainer {...restprops}>
            {children}
        </HeaderContainer>
    )
}
Browse.Frame = function browseFrame ({children,...restprops}){
    return <BrowseFrame {...restprops}>{children}</BrowseFrame>
}
Browse.Logo = function browseLogo ({...restprops}){
    return <BrowseLogo {...restprops}/>
}
Browse.LogoutLink = function logouLink ({children, ...restprops})
{
    return <LogLink {...restprops}>{children}</LogLink>
}
Browse.RightSideContainer = function rightsideContainer ({children , ...restprops}){
    return <RightSideContainer>{children}</RightSideContainer>
}
Browse.LeftSideContainer = function leftsideContainer ({children , ...restprops}){
    return <LeftSideContainer>{children}</LeftSideContainer>
}
Browse.MainHomeContentContainer = function mainContentContainer ({children , ...restprops}){
    return <MainBrowseContentContainer>{children}</MainBrowseContentContainer>
}
Browse.Title = function title ({children, ...restprops}){
    return <Title marginTop = {restprops.marginTop}>{children}</Title>
}
Browse.SubTitle = function subtitle ({children}){
    return <SubTitle>{children}</SubTitle>
}
export default Browse