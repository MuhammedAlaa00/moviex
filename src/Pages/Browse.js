import React , {useState, useEffect , useContext} from 'react';
import FooterContainer from '../ComponentsContainer/Footer/FooterContainer'
import Loading from '../components/Loading/Loading';
import { isLoggedInContext } from '../context/FirebaseContext';
import BrowseContainer from '../ComponentsContainer/BrowseContainer/BrowseContainer';
import useContent from '../context/FirestoreDataHook';
import SelectionFilter from '../Utilis/SelectionFilter';
function Browse() {
    const [loading , setloading] = useState(true)
    const {user} = useContext(isLoggedInContext);
    const {series} = useContent('series')
    console.log(series);
    const {films} = useContent('films')
    const filterDataItem = SelectionFilter({series,films})
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
              <BrowseContainer FilterData={filterDataItem}/>
              <FooterContainer/>
            </>
            :
            <>
              {
                loading  ?
                <Loading/>
                :
                <>
                  <BrowseContainer FilterData={filterDataItem}/>
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

export default Browse;
