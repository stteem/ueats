import React, { useEffect, useState, useRef } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    IconButton,
    Chip
} from "@material-tailwind/react";
import Image from "next/image";
import { PlusIcon, MinusIcon } from "../lib/svgIcons";
import { Menu } from '../lib/definitions';
import { CartItem } from "../redux/features/cart/cartSlice";
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { updateCart, selectCartItems, updateItemQuantity } from "../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { BrandColors } from '../lib/colors';


   
const CartItemsCard: React.FC<CartItem> = ({id, image_url, name, currency, price, quantity, description}) => {
  
  const [maxLength, setMaxLength] = useState(10);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);


  useEffect(() => {
    const updateMaxLength = () => {
      if (window.innerWidth < 640) {
        setMaxLength(10); // Mobile screens
      } else if (window.innerWidth < 1024) {
        setMaxLength(16); // Tablet screens
      } else {
        setMaxLength(19); // PC screens
      }
    };

    updateMaxLength();
    window.addEventListener('resize', updateMaxLength);

    return () => {
      window.removeEventListener('resize', updateMaxLength);
    };
  }, []);

  const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const handlePopoverOpen = () => {
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };
  
  
  return ( //w-96 sm:w-full md:w-1/2 lg:w-1/3
      <div className="flex items-center justify-between w-full sm:w-32 md:w-60 lg:w-full h-49 sm:h-48 md:h-40 lg:h-50 pr-5">
        <div className="w-20 md:w-40 lg:w-40 h-auto sm:h-48 md:h-1/2 lg:h-auto flex items-center justify-center overflow-hidden">
            <img
              src={image_url}
              alt="card-image"
              // width={40}
              // height={40}
              className="h-full w-full md:h-40 md:w-40 object-contain"
            />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between" style={{ color: BrandColors.accentOrange }}>
            <div className="flex items-center">
              <Typography className="font-medium whitespace-normal break-words flex items-center">
                {truncateText(name, maxLength)}
                {name.length > maxLength && (
                  <Popover open={isPopoverOpen} handler={setIsPopoverOpen}>
                    <PopoverHandler>
                      <InformationCircleIcon
                        className="h-5 w-5 md:h-5 md:w-5 cursor-pointer"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                        style={{ color: BrandColors.secondaryLime }}
                      />
                    </PopoverHandler>
                    <PopoverContent>
                      {name}
                    </PopoverContent>
                  </Popover>
                )}
              </Typography>
              
            </div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <Typography className="font-bold">
              <span 
                style={{ backgroundColor: BrandColors.secondaryLime, 
                color: BrandColors.white,
                borderRadius: '5px',
                padding: '0px 5px',
                // marginRight: '5px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
                height: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                verticalAlign: 'middle',
                position: 'relative',
                top: '-0.1rem', }}>
                  {currency}
                  <span
                    style={{ color: BrandColors.accentOrange,
                      position: 'absolute',
                      top: '0.5rem',
                      fontSize: '1.2rem',
                      zIndex: 1,
                    }}
                  >{price * quantity}</span>
              </span> 
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {description}
          </Typography>
        </div>
        <div className="flex gap-3">
          
            <IconButton
              variant="outlined"
              className="text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              style={{ 
                color: BrandColors.primaryRed,
                borderColor: BrandColors.primaryRed,
                width: '25px',
                height: '25px'
              }}
              onClick={() => dispatch(updateItemQuantity({id: id, quantityChange: 1}))}
              // onClick={() => {
              //   console.log(`Add ${id} to Cart`) 
              //   // dispatch(updateCart({id, image_url, name, currency, price, description}))
              // }}
            >
              <PlusIcon />
            </IconButton>
            {/* <div> */}
              <Chip
                  value={quantity}
                  variant="ghost"
                  size="sm"
                  className="rounded-full flex items-center justify-center"
                  style={{width:"30px"}}
              />
            {/* </div> */}
             
            <IconButton
              className="text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              variant="outlined"
              disabled={cartItems.length === 0}
              style={{ 
                color: BrandColors.primaryRed, 
                borderColor: BrandColors.primaryRed,
                width: '25px',
                height: '25px'
              }}
              onClick={() => dispatch(updateItemQuantity({id: id, quantityChange: -1}))}
              // onClick={() => {
              //   console.log(`REmove ${id} from Cart`) 
              //   // dispatch(updateCart({id, image_url, name, currency, price, description}))
              // }}
            >
              <MinusIcon />
            </IconButton>
        </div>
      </div>
    );
  }

export default CartItemsCard;