import Image from "next/image";
import { useRouter } from "next/router";

export default function Hero() {

    const router = useRouter();

    return (
        <div className="w-full max-w-[1280px] mx-auto h-[calc(100vh-5.75rem)] md:h-[calc(100vh-9.75rem)] bg-[#f0f4ff] flex flex-col-reverse lg:flex-row px-4">
            <div className="w-full h-1/2 lg:w-1/2 xl:w-2/5 lg:h-full flex flex-col items-center justify-start lg:justify-center">
                <h1 className="text-[2rem] xs:text-[2.4rem] sm:text-[3.2rem] text-center font-bold tracking-tight my-4">Grace Collection</h1>
                <p className="text-base xs:text-lg sm:text-xl font-semibold">Your personal jeweler in Thailand since 1994</p>
                <div className="mt-8 flex items-center justify-center lg:pb-8">
                    <button 
                        className="p-4 mr-2 w-[165px] border-2 border-blue-600 bg-blue-600 text-white font-semibold text-base sm:text-lg rounded-md hover:bg-blue-800 hover:border-blue-800 transition ease-in-out duration-300"
                        onClick={()=>router.push('/jewelry')}
                    >
                        Browse Shop
                    </button>
                    <button 
                        onClick={()=>router.push('/contact')}
                        className="p-4 ml-2 w-[165px] border-2 border-blue-600 text-blue-600 font-semibold text-base sm:text-lg rounded-md hover:bg-blue-300 hover:text-blue-800 transition ease-in-out duration-300"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="relative w-full h-1/3 lg:w-1/2 xl:3/5 lg:h-full">
                <Image
                    src="/images/hero-image.jpg"
                    layout="fill"
                    objectFit="contain"
                    alt=""
                />
            </div>
        </div>
    )
}