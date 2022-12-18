import {ShoppingCartIcon} from '@heroicons/react/20/solid';
import {MagnifyingGlassIcon, ChevronDownIcon} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../../hooks/useCart';

export default function DesktopNav(
    {toggleShowSummary, toggleShowSearch}: {toggleShowSummary: ()=>void, toggleShowSearch: ()=>void}
) {

    const [insideJewelryTxt, setInsideJewelryTxt] = useState(false);
    const [insideLoveTxt, setInsideLoveTxt] = useState(false);

    const router = useRouter();

    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);

    const {cart} = useCart();

    return (
        <nav className="hidden w-full md:flex md:items-center md:justify-between px-2 pt-1 border-gray-300">
            <div className="flex items-center">
                <div 
                    className="relative nav-item group flex items-center"
                    onMouseEnter={()=>setInsideJewelryTxt(true)}
                    onMouseLeave={()=>setInsideJewelryTxt(false)}
                >
                    <button className="flex pb-6 items-center cursor-pointer">
                        <p>Jewelry</p>
                        <ChevronDownIcon className="h-4 w-4 ml-2 cursor-pointer transition ease-in-out duration-300 stroke-black group-hover:stroke-blue-600" />
                    </button>
                    
                    {(insideJewelryTxt) && 
                        <div 
                            className="absolute top-12 w-[400px] bg-white border border-gray-200 shadow-md flex flex-row justify-start z-10 cursor-default"
                        >   
                            <div className="flex flex-col items-start w-1/2">
                                <p className="text-gray-500 py-1 pl-2">Shop By Category</p>
                                <p className="dropdown-item" onClick={()=>router.push('/jewelry')}>All</p>
                                <p className="dropdown-item" onClick={()=>router.push('/rings')}>Rings</p>
                                <p className="dropdown-item" onClick={()=>router.push('/necklaces')}>Necklaces</p>
                                <p className="dropdown-item" onClick={()=>router.push('/bracelets')}>Bracelets</p>
                                <p className="dropdown-item" onClick={()=>router.push('/earrings')}>Earrings</p>
                            </div>
                            <div className="flex flex-col items-start w-1/2">
                                <p className="text-gray-500 py-1 pl-2">Shop By Metal</p>
                                <p className="dropdown-item" onClick={()=>router.push('/gold')}>Gold</p>
                                <p className="dropdown-item" onClick={()=>router.push('/silver')}>Sterling Silver</p>
                                <p className="dropdown-item" onClick={()=>router.push('/stainlessSteel')}>Stainless Steel</p>
                            </div>
                        </div>
                    }
                </div>
                <div 
                    className="relative nav-item group flex items-center"
                    onMouseEnter={()=>setInsideLoveTxt(true)}
                    onMouseLeave={()=>setInsideLoveTxt(false)}
                >
                    <button className="flex pb-6 items-center cursor-pointer">
                        <p>Love & Engagement</p>
                        <ChevronDownIcon className="h-4 w-4 ml-2 cursor-pointer transition ease-in-out duration-300 stroke-black group-hover:stroke-blue-600" />
                    </button>
                    
                    {(insideLoveTxt) && 
                        <div
                            className="absolute top-12 w-[200px] bg-white border border-gray-200 shadow-md flex flex-col items-start z-10"
                        >
                            <p className="dropdown-item" onClick={()=>router.push('/engagement')}>Engagement Rings</p>
                            <p className="dropdown-item" onClick={()=>router.push('/wedding')}>Wedding Rings</p>
                        </div>
                    }
                </div>
                <button className="nav-item cursor-pointer" onClick={()=>router.push('/about')}>
                    <p className="pb-6">About</p>
                </button>
                <button className="nav-item cursor-pointer" onClick={()=>router.push('/blog')}>
                    <p className="pb-6">Blog</p>
                </button>
                <button className="nav-item cursor-pointer" onClick={()=>router.push('/contact')}>
                    <p className="pb-6">Contact</p>
                </button>
            </div>
            <div className="flex items-center pb-6">
                <button aria-label="toggle show cart" className="flex" onClick={toggleShowSummary}>
                    <ShoppingCartIcon 
                        className="h-6 w-6 cursor-pointer transition ease-in-out duration-300 fill-black hover:fill-blue-600"
                    />
                    {!isSSR && <p className="ml-1 mr-6">({cart?.total_qty})</p>}
                </button>
                
                <button aria-label="toggle show search" onClick={toggleShowSearch}>
                    <MagnifyingGlassIcon 
                        className="h-6 w-6 mr-6 cursor-pointer transition ease-in-out duration-300 stroke-black hover:stroke-blue-600"
                    />
                </button>
            </div>
        </nav>
    )
}