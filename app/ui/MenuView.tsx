'use client'
import React from "react";
import EcommerceCard  from './MenuCard'
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { Menu } from "../lib/definitions";
import { selectCarouselStatus } from "../redux/features/carousel/carouselSlice";



interface MenuViewProps {
    menuItems: Menu[];
    title: string;
}

const MenuView: React.FC<MenuViewProps> = ({menuItems, title}) => {

    const active = useAppSelector(selectCarouselStatus);

    const getTitleColor = () => {
        switch (active) {
            case 0:
                return '#ff9045';
            case 1:
                return '#d53b13';
            case 2:
                return '#9ee248';
            default:
                return '#ff9045'; // Default color if active is not 0, 1, or 2
        }
    };

    // alert("The Ueats app is under development, please check back in about 1 month's time for our full offerings. Click 'Ok' to see what we've built so far.")


    return(
        <div className="menu-container">
             {menuItems.length === 0 && <h1 className='flex relative justify-center items-center mb-10 mt-20 text-4xl text-red-500 font-bold'>No Menu Available</h1>}
             {menuItems.length && <h1 id="title" className='flex relative justify-center items-center my-8 text-3xl text-red-500 font-bold' style={{ color: getTitleColor() }}>{title}</h1>}
            <div className="scroll-container items-center gap-4 p-4">
                { menuItems && menuItems?.map((menu, index) => (
                    <EcommerceCard
                        key={index}
                        name={menu.name}
                        price={menu.price}
                        currency={menu.currency}
                        description={menu.description}
                        image_url={menu.image_url}
                    />
                ))}
            </div>
        </div>
    )
}

export default MenuView;