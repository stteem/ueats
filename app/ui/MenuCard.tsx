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
} from "@material-tailwind/react";
import { Menu } from '../lib/definitions';
// import { InformationCircleIcon } from '@heroicons/react/outline';
import { InformationCircleIcon } from '@heroicons/react/24/outline';


   
const EcommerceCard: React.FC<Menu> = ({image_url, name, currency, price, description}) => {
  
  const [maxLength, setMaxLength] = useState(10);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    const updateMaxLength = () => {
      if (window.innerWidth < 640) {
        setMaxLength(10); // Mobile screens
      } else if (window.innerWidth < 1024) {
        setMaxLength(21); // Tablet screens
      } else {
        setMaxLength(25); // PC screens
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

  // const getTitleColor = () => { 

  //   const green = () => '#9ee248';
  //   return '#ff9045'; 
  // };

  const getTitleColor = (color: string) => {
    return () => color;
  };

  const iconColor = getTitleColor('#9ee248');
  const titleColor = getTitleColor('#ff9045');
  const currencyColor = getTitleColor('#d53b13');
  const tickerColor = getTitleColor('#ffffff');
  
  return ( //w-96 sm:w-full md:w-1/2 lg:w-1/3
      <Card className="w-96 sm:w-1/2 md:w-1/3 lg:w-1/4">
        <CardHeader shadow={false} floated={false} className="h-48 sm:h-48 md:h-72 lg:h-72">
          <img
            src={image_url}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between" style={{ color: titleColor() }}>
            <div className="flex items-center">
              <Typography className="font-medium whitespace-normal break-words flex items-center">
                {truncateText(name, maxLength)}
                {name.length > maxLength && (
                  <Popover open={isPopoverOpen} handler={setIsPopoverOpen}>
                    <PopoverHandler>
                      <InformationCircleIcon
                        className="h-5 w-5 ml-2 cursor-pointer"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                        style={{ color: iconColor() }}
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
                style={{ backgroundColor: iconColor(), 
                color: tickerColor(),
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
                    style={{ color: titleColor(),
                      position: 'absolute',
                      top: '0.5rem',
                      fontSize: '1.2rem',
                      zIndex: 1,
                    }}
                  >{price}</span>
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
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            style={{ 
              backgroundColor: currencyColor(),
              color: '#ffffff'
            }}
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    );
  }

export default EcommerceCard;