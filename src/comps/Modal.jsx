import React from "react";
import { motion } from "framer-motion/dist/es/index";

export default function Modal({ imgsrc, setImgsrc }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setImgsrc(null);
    }
  };
  return (
    <motion.div  initial={{opacity:0}}
    animate={{opacity:1}} className="backdrop" onClick={handleClick}>
      <img src={imgsrc} alt="" />
    </motion.div>
  );
}
