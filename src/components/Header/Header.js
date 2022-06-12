import React from 'react';
import {Container , HeaderFrame, HeaderLogo, RightSideContainer , MainHomeContentContainer ,
    Title, SubTitle, LogLink} from './styles/Header-style'
import {Link} from 'react-router-dom';
import './styles/style.scss';
function Header({children,...restprops}) {
  const SignInPath = window.location.pathname.match('/signin');
  const SignUpPath = window.location.pathname.match('/signup');
  return (
      <Container className={`${SignInPath || SignUpPath ? 'SignContainer' : null}`} height = {restprops.height}>
          {children}
      </Container>
  );
}
Header.Frame = function headerFrame ({children,...restprops}){
    return <HeaderFrame {...restprops}>{children}</HeaderFrame>
}
// Header.LogoContainer = function logoContainer ({children,...restprops})
// {
//     return <LogoContainer>{children}</LogoContainer>
// }
Header.Logo = function headerLogo ({...restprops}){
    return <HeaderLogo {...restprops}/>
}
Header.Link = function logoLink ({children, ...restprops})
{
    return <Link className='LogoLink' to={restprops.dir}>{children}</Link>
}
Header.SignLink = function signLink ({children, ...restprops})
{
    return <Link className="sign" to={restprops.dir}>{children}</Link>
}
Header.LogoutLink = function logouLink ({children, ...restprops})
{
    return <LogLink {...restprops}>{children}</LogLink>
}
Header.RightSideContainer = function rightsideContainer ({children , ...restprops}){
    return <RightSideContainer>{children}</RightSideContainer>
}
Header.MainHomeContentContainer = function mainContentContainer ({children , ...restprops}){
    return <MainHomeContentContainer>{children}</MainHomeContentContainer>
}
Header.Title = function title ({children, ...restprops}){
    return <Title marginTop = {restprops.marginTop}>{children}</Title>
}
Header.SubTitle = function subtitle ({children}){
    return <SubTitle>{children}</SubTitle>
}
export default Header;
