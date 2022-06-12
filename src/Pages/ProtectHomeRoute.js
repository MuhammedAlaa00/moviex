import React,{useContext} from 'react';
import { Navigate , Outlet} from 'react-router-dom';
import { isLoggedInContext } from '../context/FirebaseContext';
function ProtectHomeRoute() {
    const {user} = useContext(isLoggedInContext);
  return (
    user ? <Outlet/> : <Navigate to={'/'}/>
  );
}
export default ProtectHomeRoute