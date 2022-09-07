import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useState } from 'react';

const categories = [
    "Bracelets",
    "Rings",
    "Wedding Rings",
    "Engagement Rings",
    "Necklaces",
    "Earrings",
    "Stainless Steel Jewelry",
    "Silver Jewelry",
    "Gold Jewelry",
    "Gemstone Jewelry"
]

export default function Search({showSearch}: {showSearch: boolean}) {

    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const submitSearch = (e: any) => {
        e.preventDefault();
        router.push(`/product/search?product=${searchQuery}&category=${selectedCategory}`);
        setSearchQuery("");
    }

    const dropdownItems = categories.map((category)=>{
        return (
            <option key={category} value={category}>{category}</option>
        )
    })
    const dropdown = (
        <select className="border border-gray-300 cursor-pointer mr-2" value={selectedCategory} onChange={e=>setSelectedCategory(e.target.value)}>
            <option value={"All"}>All</option>
            {dropdownItems}
        </select>
    )

    return (
        <div className={`absolute z-10 right-0 p-4 w-[100vw] max-w-[500px] top-[7rem] md:top-[10.25rem]
                        ${showSearch ? "flex" : "hidden"} flex flex-col items-center justify-center
                        bg-white border border-gray-300 rounded shadow-md`}
        >   <div className="w-[280px] mb-4 flex flex-col items-start">
                <h2 className="text-base font-bold tracking-tight mb-2">Search</h2>
                <h3 className="text-sm font-semibold text-gray-600">Select Category</h3>
                {dropdown}
            </div>
            <div className="w-[280px]">
                <h3 className="text-sm font-semibold text-gray-600">Search Products</h3>
            </div>
            <form onSubmit={(e)=>submitSearch(e)}>  
                <div className="w-[280px] flex flex-row justify-between items-center bg-gray-100 px-2">
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