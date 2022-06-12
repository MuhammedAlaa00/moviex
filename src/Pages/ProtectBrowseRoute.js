import React,{useContext} from 'react';
import { Navigate , Outlet} from 'react-router-dom';
import { isLoggedInContext } from '../context/FirebaseContext';
function ProtectBrowseRoute() {
    const {user} = useContext(isLoggedInContext);
  return (
    user ? <Navigate to={`/browse`}/> : <Outlet/>
  );
}
export default ProtectBrowseRoute