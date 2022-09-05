import {XMarkIcon, ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction, useState } from "react";

interface MobileMenuProps {
    translate: string,
    setNavTranslate: Dispatch<SetStateAction<string>>;
}

export default function MobileMenu({translate, setNavTranslate}: MobileMenuProps) {

    const hideHandler = () : void => {
        setNavTranslate("-translate-x-full");
    }

    const [showJewelry, setShowJewelry] = useState<boolean | null>(false);
    const [showLove, setShowLove] = useState<boolean | null>(false);

    const toggleShowJewelry = () => {
        setShowJewelry(!showJewelry);
    }
    const toggleShowLove = () => {
        setShowLove(!showLove);
    }

    // main component's class
    let divClass = `fixed top-0 left-0 ${translate} md:-translate-x-full
        z-20 w-full h-screen bg-white border border-gray-300
        transform transition ease-in-out duration-300`;

    let jewelryChevron = <ChevronDownIcon className="h-6 w-6 cursor-pointer transition ease-in-out duration-300 stroke-black group-hover:stroke-blue-600" />
    if (showJewelry) jewelryChevron = <ChevronUpIcon className="h-6 w-6 cursor-pointer transition ease-in-out duration-300 stroke-black group-hover:stroke-blue-600" />

    let loveChrevron = <ChevronDownIcon className="h-6 w-6 cursor-pointer transition ease-in-out duration-300 stroke-black group-hover:stroke-blue-600" />
    if (showLove) loveChrevron = <ChevronUpIcon className="h-6 w-6 cursor-pointer transition ease-in-out duration-300 stroke-black group-hover:stroke-blue-600" />

    return (
        <div className={divClass}>
            <div className="w-full flex flex-col">
                <div className="w-full flex items-center justify-between px-4 pt-4 pb-0">
                    <div className="h-[80px] w-[200px] flex items-center justify-center border border-black">
                        <p>LOGO</p>
                    </div>
                    <div className="flex items-center">
                        <XMarkIcon 
                            className="h-[1.5rem] w-[1.5rem] cursor-pointer transition ease-in-out duration-300 stroke-black hover:stroke-blue-600" 
                            onClick={hideHandler}
                        />
                    </div>
                </div>

                <div onClick={toggleShowJewelry} className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <p className="font-semibold text-base">Jewelry</p>
                    {jewelryChevron}
                </div>
                {showJewelry && 
                    <div className="w-full flex justify-start px-2 bg-gray-50">
                        <div className="flex flex-col items-start w-1/2">
                            <p className="text-gray-500 text-sm font-semibold py-1 pl-2">Shop By Category</p>
                            <p className="dropdown-item-mobile-menu">Rings</p>
                            <p className="dropdown-item-mobile-menu">Necklaces</p>
                            <p className="dropdown-item-mobile-menu">Bracelets</p>
                            <p className="dropdown-item-mobile-menu">Earrings</p>
                        </div>
                        <div className="flex flex-col items-start w-1/2">
                            <p className="text-gray-500 text-sm font-semibold py-1 pl-2">Shop By Metal</p>
                            <p className="dropdown-item-mobile-menu">Gold</p>
                            <p className="dropdown-item-mobile-menu">Sterling Silver</p>
                            <p className="dropdown-item-mobile-menu">Platinum</p>
                            <p className="dropdown-item-mobile-menu">Stainless Steel</p>
                        </div>
                    </div>
                }

                <div onClick={toggleShowLove} className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                    <p className="font-semibold text-base">Love & Engagement</p>
                    {loveChrevron}
                </div>
                {showLove &&
                    <div className="w-full flex-col items-start px-2 bg-gray-50">
                        <p className="dropdown-item-mobile-menu">Engagement Rings</p>
                        <p className="dropdown-item-mobile-menu">Wedding Rings</p>
                    </div>
                }
                <div className="flex justify-start items-center p-4 cursor-pointer hover:bg-gray-100">
                    <p className="font-semibold text-base">About</p>
                </div>
                <div className="flex justify-start items-center p-4 cursor-pointer hover:bg-gray-100">
                    <p className="font-semibold text-base">Contact</p>
                </div>
                <div className="flex justify-start items-center p-4 cursor-pointer hover:bg-gray-100">
                    <p className="font-semibold text-base">Blog</p>
                </div>
            </div>
        </div>
    )
}