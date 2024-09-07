'use client';
import { Button } from './components/MaterialTailwindWrapper';
// import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { CarouselDefault } from './components/Carousel';

export default function Home() {

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="w-full">
      <div className="flex relative justify-center items-center">
        {/* <Image
          src="/house-309156_19203.png"
          alt="Shopfront"
          className="dark:invert"
          width={2000}
          height={24}
          priority
        /> */}
        <CarouselDefault />
        {/* <Image
          src="/logo3.png"
          alt="Logo"
          className="hidden sm:block absolute top-5 left-8 dark:invert"
          width={130}
          height={50}
          priority
          // sizes="(max-width: 768px) 100px, 200px"
        /> */}
      </div>
      <div className="flex relative justify-center items-center">
        
      </div>
    </div>
  );
}