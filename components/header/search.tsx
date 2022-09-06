import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Search({showSearch}: {showSearch: boolean}) {

    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState<string>("");

    const submitSearch = (e: any) => {
        e.preventDefault();
        router.push(`/product/search?product=${searchQuery}`)
    }

    return (
        <div className={`absolute z-10 right-0 p-4 w-[100vw] max-w-[500px] top-[7rem] md:top-[10rem]
                        ${showSearch ? "flex" : "hidden"} flex flex-col items-center justify-center
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
                    <MagnifyingGlassIcon 
                        className="h-5 w-5 transition ease-in-out duration-300 stroke-black hover:stroke-blue-600 cursor-pointer" 
                        onClick={(e)=>submitSearch(e)}
                    />
                    <input type="submit" className="hidden" />
                </div>
            </form>
        </div>
    )
}