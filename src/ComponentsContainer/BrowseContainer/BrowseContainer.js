import React, {useContext} from 'react'
import Browse from '../../components/Browse/Browse'
import Logo from '../../images/Logo/logo_transparent.png'
import {auth} from '../../lib/firebase.prod';
import { useNavigate, useParams } from 'react-router-dom';
import * as Routes from '../../Constants/router';
import { isLoggedInContext } from '../../context/FirebaseContext';
function BrowseContainer({FilterData}) {
    console.log(FilterData.films);
    const {user , setuser} = useContext(isLoggedInContext);
    const Navigate = useNavigate()
    const HandleLogout = () => {
        auth.signOut()
        setuser(null)
        Navigate(Routes.HOME)
        }
    const WindowHeight = window.innerHeight - 100;
  return (
    <Browse>
        <Browse.BrowseMainContainer height = {WindowHeight}>
            <Browse.Frame>
                <Browse.LeftSideContainer>
                    <Browse.Logo src={Logo}>
                        
                    </Browse.Logo>
                </Browse.LeftSideContainer>
                <Browse.RightSideContainer>
                    <Browse.LogoutLink onClick = {HandleLogout}>
                        Log out
                    </Browse.LogoutLink>
                </Browse.RightSideContainer>
            </Browse.Frame>
        </Browse.BrowseMainContainer>
    </Browse>
  )
}

export default BrowseContainer