import React , {useState, useEffect}from 'react';
import './App.scss'
import 'normalize.css';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext , isLoggedInContext} from './context/FirebaseContext';
import Routers from './Routes'
function App() {
    const [user, setuser] = useState();
    const [loading, setloading] = useState(true);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user)
            {
                firebase.firestore().doc(`users/${user.uid}`).get()
                    .then(res => {
                        if(res.data()) {
                            setuser(res.data())
                        }
                    })
            }
        })
    }, []);
    return (
    <div className='body'>
        <isLoggedInContext.Provider value={{user , setuser, loading , setloading}}>
            <FirebaseContext.Provider value={{firebase}}>
                  <Routers/>
            </FirebaseContext.Provider>
        </isLoggedInContext.Provider>
    </div>
  );
}

export default App;
