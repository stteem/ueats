import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel autoplay={true} loop={true} className="rounded-xl">
      <img
        src="/carousel1.svg"
        alt="image 1"
        className="h-full md:h-[600px] w-full object-cover"
      />
      <img
        src="/carousel2.svg"
        alt="image 2"
        className="h-full md:h-[600px] w-full object-cover"
      />
      <img
        src="/carousel3.svg"
        alt="image 3"
        className="h-full md:h-[600px] w-full object-cover"
      />
    </Carousel>
  );
}