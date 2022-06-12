import React from 'react';
import HeaderContainer from '../ComponentsContainer/Header/HeaderContainer';
import FooterContainer from '../ComponentsContainer/Footer/FooterContainer';
import Loading from '../components/Loading/Loading';
function Signin() {
    // const [loading , setloading] = useState(true)
    // useEffect(() => {
    //     let isCancelled = false;
    //     if(!isCancelled)
    //     {
    //         setTimeout(() => {
    //             setloading(false)
    //         }, 2000);
    //     }
    //     return () => {
    //         isCancelled = true
    //     };
    // }, []);
  return (
    <>
      <HeaderContainer />
      <FooterContainer/>
    </>
  );
}
export default Signin;
