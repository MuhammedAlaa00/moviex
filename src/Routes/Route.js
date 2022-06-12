import * as ROUTES from '../Constants/router'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import ProtectBrowseRoute from '../Pages/ProtectBrowseRoute';
import ProtectHomeRoute from '../Pages/ProtectHomeRoute';
import NotFound from '../components/NotFound';
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import Signin from '../Pages/Signin';
import Browse from '../Pages/Browse';
export const Routers = () => {
  return (
    <Router>
        <Routes>
          <Route element={<ProtectBrowseRoute/>}>
              <Route exact path={ROUTES.HOME} element={<Home/>}/>
          </Route>
          <Route path={ROUTES.SIGN_UP} element={<Signup/>}/>
          <Route path={ROUTES.SIGN_IN} element={<Signin/>}/>
          <Route element={<ProtectHomeRoute/>}>
              <Route path={ROUTES.BROWSE} element={<Browse/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}