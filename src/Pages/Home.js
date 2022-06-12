import React , {useState , useEffect, useContext}from 'react';
import JumbotronContainer from '../ComponentsContainer/Jumbotron/JumbotronContainer'
import FixturesMainContainer from '../ComponentsContainer/Fixtures/FixturesMainContainer' 
import FooterContainer from '../ComponentsContainer/Footer/FooterContainer'
import HeaderContainer from '../ComponentsContainer/Header/HeaderContainer';
import Loading from '../components/Loading/Loading';
import { isLoggedInContext } from '../context/FirebaseContext';
function Home() {
    const [loading , setloading] = useState(true)
    const {user} = useContext(isLoggedInContext);
    useEffect(() => {
        let isMounted = true;
         setTimeout(() => {
            if(isMounted)
                {
                    setloading(false)
                }
            }, 2000);
        return () => {
            isMounted = false
        };
    }, []);
  return (
        <>
            {
                loading ? 
                <Loading/>
                :
                <>
                    {
                        user ? 
                        <>
                            <HeaderContainer/>
                            <JumbotronContainer/>
                            <FixturesMainContainer/>
                            <FooterContainer/>
                        </>
                        :
                        <>
                            {
                                loading  ?
                                <Loading/> 
                                :
                                <>
                                    <HeaderContainer/>
                                    <JumbotronContainer/>
                                    <FixturesMainContainer/>
                                    <FooterContainer/>
                                </>     
                            }
                        </>
                    }
                </>
            }
        </>
    )
}

export default Home;
