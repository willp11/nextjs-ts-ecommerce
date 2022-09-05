import {ShoppingCartIcon} from '@heroicons/react/20/solid';
import {MagnifyingGlassIcon, Bars3Icon} from '@heroicons/react/24/outline';
import { useState } from 'react';
import MobileNav from './mobileNav';
import DesktopNav from './desktopNav';

export default function Header() {

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
                <DesktopNav />
            </div>
            <MobileNav translate={navTranslate} setNavTranslate={setNavTranslate} />
        </header>
    )
}