import React from 'react';
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { Grid } from "@material-ui/core";

const ImageGrid = ({ setSelectedImage }) => {
    const { docs }= useFirestore('images')
    return (
        <div>
            <Grid container className='img-grid' justify='center' spacing={0}>
                {docs&&docs.map(doc =>(
                    <Grid item xs={12} md={4} sm={4}  className='img-wrap' key={doc.id}
                    onClick={()=>setSelectedImage(doc.url)}
                                // layout
                                // whileHover={{ opacity : 1 }}
                    >
                        <motion.img src={doc.url} alt='uploaded'
                          initial={{ opacity : 0 }}
                          animate={{ opacity : 1 }}
                          transition={{ delay : 1 }}
                        />
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

export default ImageGrid;
