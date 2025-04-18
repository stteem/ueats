'use client'
import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import { updateCarousel } from "../redux/features/carousel/carouselSlice";
import { useAppDispatch } from "../redux/hook"
import Image from "next/image";

 
export function CarouselDefault() {

  const dispatch = useAppDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming there are 3 slides
    }, 5000); // Change interval to match your autoplay speed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // console.log(`Carousel changed to slide ${activeIndex}`);
    dispatch(updateCarousel(activeIndex));
  }, [activeIndex, dispatch]);
  
  return (
    <Carousel 
      autoplay={true} 
      loop={true} 
      className="rounded-none"
      // activeIndex={activeIndex}
    >
      <Image
        src="/carousel1.svg"
        width={1920}
        height={600}
        alt="The carousel has an orange background with a white bowl of jollof rice. On the background is the heading 'Healthy Fast Food' and a subtext 'Freshly cooked delicious jollof rice'."
        className="h-full md:h-[600px] w-full object-cover"
      />
      
      <Image
        src="/carousel2.svg"
        width={1920}
        height={600}
        alt="The carousel has a red background with a paper bowl of jollof rice and a paper of pieces of fried and garnished chicken wings. On the background is the heading 'Deliciously Sauced Chicken Wings & Jollof Rice'."
        className="h-full md:h-[600px] w-full object-cover"
      />
      
      <Image
        src="/carousel3.svg"
        width={1920}
        height={600}
        alt="image 3"
        className="h-full md:h-[600px] w-full object-cover"
      />
    </Carousel>
  );
}