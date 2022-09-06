import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Search() {

    const router = useRouter();

    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const toggleShowSearch = () => {
        setShowSearch(!showSearch);
    }

    const submitSearch = (e: any) => {
        console.log("search");
    }

    return (
        <div className="relative">
            <MagnifyingGlassIcon 
                className="h-6 w-6 mr-6 cursor-pointer transition ease-in-out duration-300 stroke-black hover:stroke-blue-600"
                onClick={toggleShowSearch}
            />
            {/* <form onSubmit={(e)=>submitSearch(e)} className="hidden md:block">
                <div 
                    className="hidden md:flex md:flex-row md:justify-between md:items-center bg-gray-100 border border-gray-200 pr-1"
                    onClick={toggleShowSearch}
                >
                    <input 
                        type="text" 
                        placeholder="SEARCH..." 
                        className="p-2 focus:outline-0 bg-gray-100 placeholder:text-gray-600 placeholder:text-sm"
                        onChange={(e)=>setSearchQuery(e.target.value)}
                        value={searchQuery}
                    />
                    <MagnifyingGlassIcon className="h-[20px] w-[20px] cursor-pointer" onClick={(e)=>submitSearch(e)} />
                </div>
            </form> */}
            {/* <div className={`absolute right-0 top-[7rem] z-10 p-4 w-full md:top-[10.25rem]
                            ${showSearch ? "flex" : "hidden"} flex items-center justify-center
                            bg-white border border-gray-300 rounded shadow-md`}> */}

            <div className={`absolute -right-[2.5rem] xs:-right-[4rem] z-10 p-4 w-[100vw] max-w-[500px] top-[4.25rem] md:right-0 md:top-[3rem]
                            ${showSearch ? "flex" : "hidden"} flex items-center justify-center
                            bg-white border border-gray-300 rounded shadow-md`}
            >
                <form onSubmit={(e)=>submitSearch(e)}>  
                    <div className="flex flex-row justify-between items-center bg-gray-100 px-2">
                        <input 
                            type="text" 
                            placeholder="SEARCH..." 
                            className="p-2 focus:outline-0 bg-gray-100 placeholder:text-gray-600 placeholder:text-sm"
                            onChange={(e)=>setSearchQuery(e.target.value)}
                            value={searchQuery}
                        />
                        <MagnifyingGlassIcon className="h-5 w-5 transition ease-in-out duration-300 stroke-black hover:stroke-blue-600 cursor-pointer" onClick={(e)=>submitSearch(e)}/>
                        <input type="submit" className="hidden" />
                    </div>
                </form>
            </div>
        </div>
    )
}