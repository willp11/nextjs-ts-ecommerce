import Image from "next/image"

export default function Hero() {
    return (
        <div className="w-full h-[calc(100vh-6.5rem)] md:h-[calc(100vh-10.25rem)] bg-[#f0f4ff] flex flex-col-reverse lg:flex-row px-4">
            <div className="w-full h-1/2 lg:w-1/2 xl:w-2/5 lg:h-full flex flex-col items-center justify-start lg:justify-center">
                <h1 className="text-[2rem] xs:text-[2.4rem] sm:text-[3.2rem] text-center font-bold tracking-tight my-4">Nova Collection Jewelry</h1>
                <p className="text-base xs:text-lg sm:text-xl font-semibold">Your personal jeweler in Chiang Mai since 1994</p>
                <div className="mt-8 flex items-center justify-center lg:pb-8">
                    <button className="p-4 mr-2 w-[165px] border-2 border-blue-600 bg-blue-600 text-white font-semibold text-base sm:text-lg rounded-md hover:bg-blue-800 transition ease-in-out duration-300">Browse Shop</button>
                    <button className="p-4 ml-2 w-[165px] border-2 border-blue-600 text-blue-600 font-semibold text-base sm:text-lg rounded-md hover:bg-blue-300 hover:text-blue-800 transition ease-in-out duration-300">Custom Jewelry</button>
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