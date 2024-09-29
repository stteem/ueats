// 'use client';
import { CarouselDefault } from './ui/Carousel';
import MenuView from './ui/MenuView';
import { 
    fetchMenu, fetchChickenCombo, 
    fetchBeefCombo, fetchGoatmeatCombo, 
    fetchBeef, fetchChickenWings, fetchGoatmeat 
} from './lib/data';
import AnimatedDiv from './ui/FadeInDiv';
// import NotificationDialog from "./ui/Notification";

export default async function Home() {

  const menu = await fetchMenu();
  const chickenCombo = await fetchChickenCombo();
  const beefCombo = await fetchBeefCombo();
  const goatmeatCombo = await fetchGoatmeatCombo();
  const beef = await fetchBeef();
  const chickenWings = await fetchChickenWings();
  const goatmeat = await fetchGoatmeat();  

  return (
    <div className="w-full">
      <div className="flex relative justify-center items-center">
        <CarouselDefault />
      </div>
      <div className='bg-blue-gray-50 ' style={{ backgroundImage: "url('/bg-png.png')" }}>
        <MenuView menuItems={menu} title={"Jollof Menu"}/>
      </div>
      <div className='bg-blue-gray-50 ' style={{ backgroundImage: "url('/bg3.png')" }}>
        <MenuView menuItems={chickenCombo} title={"Chicken Combos"}/>
      </div>
      <div className='bg-blue-gray-50 ' style={{ backgroundImage: "url('/bg-png.png')" }}>
        <MenuView menuItems={beefCombo} title={"Beef Combos"}/>
      </div>
      <div className='bg-blue-gray-50 ' style={{ backgroundImage: "url('/bg3.png')" }}>
        <MenuView menuItems={goatmeatCombo} title={"Goatmeat Combos"}/>
      </div>
      <div className='bg-blue-gray-50' style={{ backgroundImage: "url('/bg-png.png')" }}>
        <AnimatedDiv imageSrc="/delivery-image.png">
          {/* <h2>Your content here</h2>
          <p>More content...</p> */}
        </AnimatedDiv>
      </div>
      <div className='bg-blue-gray-50 ' style={{ backgroundImage: "url('/bg-png.png')" }}>
        <MenuView menuItems={beef} title={"Beef"}/>
      </div>
      <div className='bg-blue-gray-50 ' style={{ backgroundImage: "url('/bg3.png')" }}>
        <MenuView menuItems={chickenWings} title={"Chicken Wings"}/>
      </div>
      <div className='bg-blue-gray-50 ' style={{ backgroundImage: "url('/bg-png.png')" }}>
        <MenuView menuItems={goatmeat} title={"Goatmeat"}/>
      </div>
    </div>
  );
}