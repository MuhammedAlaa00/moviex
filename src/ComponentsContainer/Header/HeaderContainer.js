import React ,{useContext} from 'react';
import Header from '../../components/Header/Header';
import Logo from '../../images/Logo/logo_transparent.png'
import * as Routes from '../../Constants/router';
import OptForm  from '../../components/Fixtures/OptForm';
import SignIn from '../../components/Sign In/SignIn';
import {auth} from '../../lib/firebase.prod';
import SignUp from '../../components/Sign Up/SignUp';
import { useNavigate } from 'react-router-dom';
import { isLoggedInContext } from '../../context/FirebaseContext';
function HeaderContainer() {
  const {user , setuser} = useContext(isLoggedInContext);
  const Navigate = useNavigate()
  const HandleLogout = () => {
      auth.signOut()
      setuser(null)
      Navigate(Routes.HOME)
    }
  const SignInPath = window.location.pathname.match('/signin');
  const SignUpPath = window.location.pathname.match('/signup');
  const WindowHeight = window.innerHeight;
  const WindowHeightForSignIn = window.innerHeight + 275
  const HeaderHeight = SignInPath || SignUpPath ? WindowHeightForSignIn : WindowHeight;
  return (
    <div>
      <Header height = {HeaderHeight}>
          <Header.Frame>
            <Header.Link dir={Routes.HOME}>
              <Header.Logo src={Logo}/>
            </Header.Link>
          <Header.RightSideContainer>
                {
                  SignInPath || SignUpPath ?
                  <div>
                    {
                      SignInPath ? 
                      <div>
                        {
                          user
                          ?  
                            <Header.LogoutLink className="logout" onClick={HandleLogout}>Log Out</Header.LogoutLink>  
                          : null       
                        }
                      </div>
                      :
                      <div>
                          {
                            user
                            ?  
                              <Header.LogoutLink className="logout" onClick={HandleLogout}>Log Out</Header.LogoutLink>  
                            : <Header.SignLink dir={Routes.SIGN_IN}>
                                Sign In
                              </Header.SignLink>       
                          }
                      </div>
                    }
                  </div>
                  :
                  <div>
                    {
                      user ? 
                      <Header.LogoutLink className="logout" onClick={HandleLogout}>Log Out</Header.LogoutLink>  
                      : <Header.SignLink dir={Routes.SIGN_IN}>
                          Sign In
                        </Header.SignLink> 
                    }
                  </div>
                }
            </Header.RightSideContainer>
          </Header.Frame>
          {
            !SignInPath && !SignUpPath
            ? 
            <Header.MainHomeContentContainer>
            <Header.Title marginTop = {`${WindowHeight/5}`}>Unlimited movies, TV shows, and more.</Header.Title>
            <Header.SubTitle>Watch anywhere. Cancel anytime.</Header.SubTitle>
            <OptForm/>
            </Header.MainHomeContentContainer>
            :
            <>
              {
                !SignUpPath ? <SignIn/> : <SignUp/> 
              }
            </> 
          }
        </Header>
    </div>
  );
}

export default HeaderContainer;
