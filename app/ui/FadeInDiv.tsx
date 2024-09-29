'use client';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

const MotionImage = motion(Image);


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
        <MotionImage
            src={imageSrc}
            initial={{ x: '-100vw', y: 0  }}
            animate={{ 
                x: isInView ? 0 : '-100vw',
                y: [0, -10, 0],
            }}
            transition={{ 
                duration: 0.8, 
                ease: "easeOut", 
                delay: 0.2,
                repeat: Infinity,
                x: {type: 'spring', stiffness: 120 },
            }}
            width={300}
            height={200}
            alt="A vector image of a dispatch rider swiftly sliding across the screen with the inscription 'Fast Delivery'"
            style={{ width: '50%', maxWidth: '300px' }} // Adjust as needed
        />
        </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedDiv;
