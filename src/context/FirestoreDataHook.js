import { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "./FirebaseContext";
export default function useContent(target) {
  const [content, setcontent] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((res) => {
        const allContent = res.docs.map((doc) => ({
          ...doc.data(),
          docID: doc.id,
        }));
        /*
            if(localStorage.getItem('series') === null)
            {
                if (target == 'series')
                {
                    localStorage.setItem('series' , JSON.stringify(allContent))
                }
            }
            if(localStorage.getItem('films') === null)
            {
                if(target == 'films')
                {
                    localStorage.setItem('films' , JSON.stringify(allContent))
                }
            }
            */
        setcontent(allContent);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return { [target]: content };
}
