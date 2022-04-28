import React from 'react'
import useFireStore from '../hooks/useFirestore'
import {motion} from 'framer-motion/dist/es/index'

export default function ImageGrid ( {setImgsrc}) {
    const {doc}= useFireStore('images')
  
  return (
    <div
    
     className='img-grid px-1'>
        {doc && doc.map((docs)=>(
            
            <motion.div className='img-wrap' key={docs.id}
            layout
            whileHover={{opacity:1}}
            onClick={()=>{
                setImgsrc(docs.link)
            }}>
              <motion.img src={docs.link} alt="uploaded Images"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:1}} />
 
            </motion.div>
  ))
        }
    </div>
  )
}
