import {XMarkIcon, ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction, useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';

interface MobileMenuProps {
    translate: string,
    setNavTranslate: Dispatch<SetStateAction<string>>;
}

export default function MobileNav({translate, setNavTranslate}: MobileMenuProps) {

    const router = useRouter();

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

    const handleNavigate = (url: string) => {
        hideHandler();
        router.push(url);
    }

    // main component's class
    let divClass = `fixed top-0 left-0 ${translate} md:-translate-x-full
        z-20 w-full h-screen bg-white border border-gray-300
        transform transition ease-in-out duration-300`;

    let jewelryChevron = <ChevronDownIcon className="h-6 w-6 cursor-pointer transition ease-in-out duration-300 stroke-black group-hover:stroke-blue-600" />
    if (showJewelry) jewelryChevron = <ChevronUpIcon className="h-6 w-6 cursor-pointer transition ease-in-out duration-300 stroke-black group-hover:stroke-blue-600" />

    let loveChevron = <ChevronDownIcon className="h-6 w-6 cursor-pointer transition ease-in-out duration-300 stroke-black group-hover:stroke-blue-600" />
    if (showLove) loveChevron = <ChevronUpIcon className="h-6 w-6 cursor-pointer transition ease-in-out duration-300 stroke-black group-hover:stroke-blue-600" />

    // transition open/close sub-menus
    let jewelryClass = "h-[56px] transition-height ease-in-out duration-300 overflow-hidden";
    if (showJewelry) jewelryClass = "h-[224px] transition-height ease-in-out duration-300 overflow-hidden";

    let loveClass = "h-[56px] transition-height ease-in-out duration-300 overflow-hidden";
    if (showLove) loveClass = "h-[112px] transition-height ease-in-out duration-300 overflow-hidden";

    return (
        <nav className={divClass}>
            <div className="w-full flex flex-col">
                <div className="w-full flex items-center justify-between px-4 pt-4 pb-0">
                    <div
                        onClick={()=>handleNavigate('/')}
                        className="relative h-[68px] w-[68px] xs:h-[80px] xs:w-[80px] flex items-center justify-center cursor-pointer"
                    >
                        <Image
                            src="/images/Grace.png"
                            layout="fill"
                            objectFit="contain"
                            alt="Logo"
                        />
                    </div>
                    <div className="flex items-center">
                        <XMarkIcon 
                            className="h-[1.5rem] w-[1.5rem] cursor-pointer transition ease-in-out duration-300 stroke-black hover:stroke-blue-600" 
                            onClick={hideHandler}
                        />
                    </div>
                </div>

                <div className={jewelryClass}>
                    <div onClick={toggleShowJewelry} className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                        <p className="font-semibold text-base">Jewelry</p>
                        {jewelryChevron}
                    </div>
                    <div className={`w-full flex justify-start px-2 bg-gray-50`}>
                        <div className="flex flex-col items-start w-1/2">
                            <p className="text-gray-500 text-sm font-semibold py-1 pl-2">Shop By Category</p>
                            <p className="dropdown-item-mobile-menu" onClick={()=>handleNavigate('/jewelry')}>All</p>
                            <p className="dropdown-item-mobile-menu" onClick={()=>handleNavigate('/rings')}>Rings</p>
                            <p className="dropdown-item-mobile-menu" onClick={()=>handleNavigate('/necklaces')}>Necklaces</p>
                            <p className="dropdown-item-mobile-menu" onClick={()=>handleNavigate('/bracelets')}>Bracelets</p>
                            <p className="dropdown-item-mobile-menu" onClick={()=>handleNavigate('/earrings')}>Earrings</p>
                        </div>
                        <div className="flex flex-col items-start w-1/2">
                            <p className="text-gray-500 text-sm font-semibold py-1 pl-2">Shop By Metal</p>
                            <p className="dropdown-item-mobile-menu" onClick={()=>handleNavigate('/gold')}>Gold</p>
                            <p className="dropdown-item-mobile-menu" onClick={()=>handleNavigate('/silver')}>Sterling Silver</p>
                            <p className="dropdown-item-mobile-menu" onClick={()=>handleNavigate('/stainlessSteel')}>Stainless Steel</p>
                        </div>
                    </div>
                </div>

                <div className={loveClass}>
                    <div onClick={toggleShowLove} className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100">
                        <p className="font-semibold text-base">Love & Engagement</p>
                        {loveChevron}
                    </div>
                    <div className="w-full flex-col items-start px-2 bg-gray-50">
                        <p className="dropdown-item-mobile-menu" onClick={()=>handleNavigate('/engagement')}>Engagement Rings</p>
                        <p className="dropdown-item-mobile-menu" onClick={()=>handleNavigate('/wedding')}>Wedding Rings</p>
                    </div>
                </div>
                
                <div className="flex justify-start items-center p-4 cursor-pointer hover:bg-gray-100">
                    <p className="font-semibold text-base" onClick={()=>handleNavigate('/about')}>About</p>
                </div>
                <div className="flex justify-start items-center p-4 cursor-pointer hover:bg-gray-100">
                    <p className="font-semibold text-base" onClick={()=>handleNavigate('/contact')}>Contact</p>
                </div>
                <div className="flex justify-start items-center p-4 cursor-pointer hover:bg-gray-100">
                    <p className="font-semibold text-base" onClick={()=>handleNavigate('/blog')}>Blog</p>
                </div>
            </div>
        </nav>
    )
}