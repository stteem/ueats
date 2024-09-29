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
 
export default function DrawerPlacement() {
  const [openBottom, setOpenBottom] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);



  const openCart = useAppSelector(selectCartStatus);
  const dispatch = useAppDispatch();
 
 
  const closeDrawerRight = () => {
    dispatch(updateCartDrawer(false));
    getDrawerSize()
  }

  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getDrawerSize = () => {
    if (screenWidth < 768) {  // Mobile breakpoint
      return 400;  // Full width on mobile
    } else if (screenWidth < 1024) {  // Tablet breakpoint
      return 500;  // 500px on tablets
    } else {
      return 700;  // 700px on larger screens
    }
  };
  
  return (
    <React.Fragment>
       
      <Drawer
        placement="bottom"
        open={screenWidth < 768 ? openCart : false}
        onClose={closeDrawerRight}
        className="p-4"
        size={600}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Ueats
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
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
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
            Material Tailwind
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
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
      
    </React.Fragment>
  );
}