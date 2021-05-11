import { useState, useEffect } from "react";
import {projectFirestore, projectStorage, timestamp} from "../firebase/config";

const useFirestore =(colletion) =>{
    const [docs, setDocs  ] = useState([]);
   useEffect(()=>{
  const unsub =  projectFirestore.collection(colletion)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap)=>{
            let documents = [];
            snap.forEach(doc => {
              documents.push({...doc.data(),id : doc.id })
            });
            setDocs(documents);
        });
       return () => unsub()
   },[colletion])
  return { docs }
}
export default useFirestore;
