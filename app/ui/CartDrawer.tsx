'use client';
import React, { useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { updateCartDrawer, selectCartStatus } from "../redux/features/drawer/drawerSlice";
import { selectCartItems, selectCartTotal, updateTotal } from "../redux/features/cart/cartSlice";
import ListCartItemsWithBadge from "./CartItemsView";
import { BrandColors } from "../lib/colors";

export default function DrawerPlacement() {

  const [screenWidth, setScreenWidth] = useState(0);
  const openCart = useAppSelector(selectCartStatus);
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();
 
 
  const closeDrawerRight = () => {
    dispatch(updateCartDrawer(false));
  }

  const closeDrawerBottom = () => {
    dispatch(updateCartDrawer(false));
  }

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const getDrawerSize = () => {
  //   if (screenWidth < 768) {  // Mobile breakpoint
  //     return 400;  // Full width on mobile
  //   } else if (screenWidth < 1024) {  // Tablet breakpoint
  //     return 500;  // 500px on tablets
  //   } else {
  //     return 700;  // 700px on larger screens
  //   }
  // };

  // const [total, setTotal] = useState(0)

  useEffect(() => {
    let total = 0;
    cartItems.map((item) => {
        total += item.price * item.quantity;
    });
    // setTotal(total);
    dispatch(updateTotal(total));
  }, [cartItems, dispatch]);
  
  return (
    <React.Fragment>
       
      <Drawer
        placement="bottom"
        open={screenWidth < 768 ? openCart : false}
        onClose={closeDrawerBottom}
        className="p-4"
        size={600}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" 
            style={{ color: BrandColors.primaryRed }}
          >
          {cartItems.length} Cart {cartItems.length <= 1 ? 'Item' : 'Items'} | Total {cartTotal}
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerBottom}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        
        <div className="h-full overflow-y-auto pb-32 p-4 gap-2">
          <ListCartItemsWithBadge />
        </div>
      </Drawer>


      <Drawer
       placement="right"
       open={screenWidth > 768 ? openCart : false}
       onClose={closeDrawerRight}
       className="p-4"
       size={700}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Cart
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="h-screen overflow-y-auto pb-40 p-4 gap-2">
          <ListCartItemsWithBadge />
        </div>
      </Drawer>
      
    </React.Fragment>
  );
}