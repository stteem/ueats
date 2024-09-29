'use client';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import React from 'react';

interface AnimatedDivProps {
    imageSrc: string;
    children?: React.ReactNode;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ imageSrc, children }) => {
    
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false, amount: 1 });

    return (
    <AnimatePresence>
        <motion.div
            className="flex flex-col items-center justify-center"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              y: isInView ? 0 : 50 
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{paddingRight: '10%'}}
        
        >
        {children}
        <motion.img
          src={imageSrc}
          initial={{ x: '-100vw'  }}
          animate={{ 
            x: isInView ? 0 : '-100vw'
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut", 
            delay: 0.2,
            x: {type: 'spring', stiffness: 120 },
        }}
          style={{ width: '45%', maxWidth: '300px' }} // Adjust as needed
        />
        </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedDiv;
