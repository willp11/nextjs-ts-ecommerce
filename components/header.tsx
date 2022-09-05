import {ShoppingCartIcon} from '@heroicons/react/20/solid';
import {MagnifyingGlassIcon, ChevronDownIcon, Bars3Icon} from '@heroicons/react/24/outline';
import { useState } from 'react';
import MobileMenu from './mobileMenu';

export default function Header() {

    const [insideJewelryTxt, setInsideJewelryTxt] = useState(false);
    const [insideJewelryDropdown, setInsideJewelryDropdown] = useState(false);
    const [insideLoveTxt, setInsideLoveTxt] = useState(false);
    const [insideLoveDropdown, setInsideLoveDropdown] = useState(false);

    const [navTranslate, setNavTranslate] = useState("-translate-x-full");

    return (
        <header className="w-full bg-white">
            <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center px-2 xs:px-4 pt-2">
                <div className="w-full flex items-center justify-between p-2 mb-2">
                    <div className="h-[80px] w-[200px] flex items-center justify-center border border-black">
                        <p>LOGO</p>
                    </div>
                    <div className="flex md:hidden items-center">
                        <ShoppingCartIcon className="h-6 w-6 mr-6 cursor-pointer transition ease-in-out duration-300 fill-black hover:fill-blue-600"/>
                        <MagnifyingGlassIcon className="h-6 w-6 mr-6 cursor-pointer transition ease-in-out duration-300 stroke-black hover:stroke-blue-600"/>
                        <Bars3Icon 
                            className="h-6 w-6 cursor-pointer transition ease-in-out duration-300 stroke-black hover:stroke-blue-600"
                            onClick={()=>setNavTranslate("translate-x-0")}
                        />
                    </div>
                </div>
                <div className="hidden w-full md:flex items-center justify-between px-2 pt-1">
                    <div className="flex items-center">
                        <div 
                            className="relative nav-item group flex items-center"
                            onMouseEnter={()=>setInsideJewelryTxt(true)}
                            onMouseLeave={()=>setInsideJewelryTxt(false)}
                        >
                            <div className="flex pb-6 items-center">
                                <p>Jewelry</p>
                                <ChevronDownIcon className="h-4 w-4 ml-2 cursor-pointer transition ease-in-out duration-300 stroke-black group-hover:stroke-blue-600" />
                            </div>
                            
                            {insideJewelryTxt || insideJewelryDropdown ? 
                                <div 
                                    className="absolute top-12 w-[400px] bg-white border border-gray-200 shadow-md flex flex-row justify-start"
                                    onMouseEnter={()=>setInsideJewelryDropdown(true)}
                                    onMouseLeave={()=>setInsideJewelryDropdown(false)}
                                >   
                                    <div className="flex flex-col items-start w-1/2">
                                        <p className="text-gray-500 py-1 pl-2">Shop By Category</p>
                                        <p className="dropdown-item">Rings</p>
                                        <p className="dropdown-item">Necklaces</p>
                                        <p className="dropdown-item">Bracelets</p>
                                        <p className="dropdown-item">Earrings</p>
                                    </div>
                                    <div className="flex flex-col items-start w-1/2">
                                        <p className="text-gray-500 py-1 pl-2">Shop By Metal</p>
                                        <p className="dropdown-item">Gold</p>
                                        <p className="dropdown-item">Sterling Silver</p>
                                        <p className="dropdown-item">Platinum</p>
                                        <p className="dropdown-item">Stainless Steel</p>
                                    </div>
                                </div>
                                : null
                            }
                        </div>
                        <div 
                            className="relative nav-item group flex items-center"
                            onMouseEnter={()=>setInsideLoveTxt(true)}
                            onMouseLeave={()=>setInsideLoveTxt(false)}
                        >
                            <div className="flex pb-6 items-center">
                                <p>Love & Engagement</p>
                                <ChevronDownIcon className="h-4 w-4 ml-2 cursor-pointer transition ease-in-out duration-300 stroke-black group-hover:stroke-blue-600" />
                            </div>
                            
                            {insideLoveTxt || insideLoveDropdown ? 
                                <div 
                                    className="absolute top-12 w-[200px] bg-white border border-gray-200 shadow-md flex flex-col items-start"
                                    onMouseEnter={()=>setInsideLoveDropdown(true)}
                                    onMouseLeave={()=>setInsideLoveDropdown(false)}
                                >
                                    <p className="dropdown-item">Engagement Rings</p>
                                    <p className="dropdown-item">Wedding Rings</p>
                                </div>
                                : null
                            }
                        </div>
                        <div className="nav-item">
                            <p className="pb-6">About</p>
                        </div>
                        <div className="nav-item">
                            <p className="pb-6">Blog</p>
                        </div>
                        <div className="nav-item">
                            <p className="pb-6">Contact</p>
                        </div>
                    </div>
                    <div className="flex items-center pb-6">
                        <ShoppingCartIcon className="h-6 w-6 mr-6 cursor-pointer transition ease-in-out duration-300 fill-black hover:fill-blue-600"/>
                        <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer transition ease-in-out duration-300 stroke-black hover:stroke-blue-600"/>
                    </div>
                </div>
            </div>
            <MobileMenu translate={navTranslate} setNavTranslate={setNavTranslate} />
        </header>
    )
}