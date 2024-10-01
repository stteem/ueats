'use client';
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { updateCartDrawer } from "../redux/features/drawer/drawerSlice";
import { selectCartItems } from "../redux/features/cart/cartSlice";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { BrandColors } from '../lib/colors';
import { motion, AnimatePresence } from 'framer-motion';

 
export default function NavbarBottom() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  
  const openCartDrawer = () => {
    dispatch(updateCartDrawer(true));
    console.log('open cart after func ')
  }

  if (cartItems.length === 0) {
    return null; // Don't render anything if cart is empty
  }
 
  return (
    <AnimatePresence>
    <motion.div 
      className={`w-full mx-auto h-[60px] sm:h-[80px] px-4 py-2 lg:px-8 lg:py-4 rounded-none flex items-center bg-white`}
      style={{ 
        position: "fixed", 
        bottom: 0, 
        zIndex: 2
      }}
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ 
        x: cartItems.length > 0 ? 0 : '-100vw', 
        opacity: cartItems.length > 0 ? 1 : 0, 
      }}
      transition={{ 
        x: {type: 'spring', stiffness: 120, damping: 20},
        opacity: { duration: 0.5 },
      }}
    >
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <Image
              src="/logo1.png"
              alt="Logo"
              className="hidden sm:block dark:invert"
              width={60}
              height={30}
              priority
              // absolute top-5 left-8
              // sizes="(max-width: 768px) 100px, 200px"
            />
          </Typography>
          {/* <div className="hidden lg:block">{navList}</div> */}
          
          <Button
            size="md"
            // color={red()}
            className="flex items-center gap-2"
            onClick={openCartDrawer}
            style={{ 
              backgroundColor: BrandColors.primaryRed,
              color: BrandColors.white
            }}
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Cart ({cartItems.length})</span>
          </Button>
        </div>
    </motion.div>
    </AnimatePresence>  
  );
}