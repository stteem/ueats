'use client'
import React, { useEffect } from "react";
import EcommerceCard  from './MenuCard'
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { Menu } from "../lib/definitions";
import { selectCarouselStatus } from "../redux/features/carousel/carouselSlice";
import { selectMenu, updateMenu } from "../redux/features/menu/menuSlice";
import { BrandColors } from '../lib/colors';



interface MenuViewProps {
    menuItems: Menu[];
    title: string;
}

const MenuView: React.FC<MenuViewProps> = React.memo(({menuItems, title}) => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(updateMenu(menuItems));
    }, [menuItems, dispatch]);
    const active = useAppSelector(selectCarouselStatus);
    

    const getTitleColor = () => {
        switch (active) {
            case 0:
                return BrandColors.accentOrange;
            case 1:
                return BrandColors.primaryRed
            case 2:
                return BrandColors.secondaryLime;
            default:
                return BrandColors.accentOrange; // Default color if active is not 0, 1, or 2
        }
    };

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
                        id={menu.id}
                    />
                ))}
            </div>
        </div>
    )
})
MenuView.displayName = 'MenuView';
export default MenuView;