import { useState,useEffect } from "react";
import { projectStorage,db } from '../firebase/config'
import {ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage'
import { collection,addDoc,serverTimestamp } from "firebase/firestore";
const useStorage=(file)=>{
    const[progress,setProgress]=useState(0)
    const[error,setError]=useState(null)
    const[url,setUrl]=useState(null)

    useEffect(()=>{
       const storageRef=ref(projectStorage,file.name);
       const uploadTask = uploadBytesResumable(storageRef, file);
   const collectionRef=collection(db,'images')

uploadTask.on('state_changed',function(snapshot){ 
    const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setProgress(percentage)
  },(error) => {
    setError(error)
  },() => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        const url= downloadURL;
        addDoc(collectionRef, {
          link:url,
          createdAt: serverTimestamp()
        })
        setUrl(url)
    });
  }
);
    },[file])
    return{progress,url,error}

    
}
export default useStorage;