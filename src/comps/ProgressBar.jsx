import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import {motion} from 'framer-motion/dist/es/index'


export default function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  useEffect(()=>{
  if(url){
    setFile(null)
  }
  },[url,setFile])
  return (
    <motion.div intial={{width:0}}  className="progress-bar py-3 progress-bar-striped bg-success" role="progressbar"  aria-valuemin="0" aria-valuemax="100" style={{ width: progress + "%" }}>
    {progress.toFixed(2)}%
    </motion.div>
  );
}
