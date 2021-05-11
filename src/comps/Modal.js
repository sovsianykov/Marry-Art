import React, {useCallback} from 'react';
import { motion } from "framer-motion";

const Modal = ({ selectedImage , setSelectedImage }) => {

    const handleClick = useCallback((e)=>{
        if (e.target.classList.contains('backdrop')) {
            setSelectedImage(null)
        }},[selectedImage])
    return (
        <motion.div className='backdrop' onClick={handleClick}
             initial={{ opacity : 0 }}
             animate={{ opacity : 1 }}
        >
            <motion.img src={selectedImage}  alt='enlarge'
                        initial={{ y : '-100vh' }}
                        animate={{ y : 0 }}
            />
        </motion.div>
    )

}





export default Modal;
