import { query,collection, orderBy, onSnapshot } from "firebase/firestore";
import { useState,useEffect } from "react";
import { db } from '../firebase/config'
const useFirestore =()=>{
    const [doc,setDoc]=useState([])
    const collectionRef=collection(db,'images')
    useEffect(()=>{
       const unsub=onSnapshot(query(collectionRef, orderBy("createdAt", "desc")),(snap)=>{
           let documents=[];
           snap.forEach(doc=>{
               documents.push({...doc.data(),id:doc.id,})
           })
           setDoc(documents)
       });
       return ()=>{
           unsub();
       }
    },[collection])

    return { doc}
}
export default useFirestore