import Image from "next/image";

export default function About() {
    return (
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center px-6 py-4">
            <div className="relative w-full min-h-[200px]">
                <Image 
                    src="/images/about-banner-top-new.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                />
            </div>
            <div className="w-full flex flex-col md:flex-row items-start mt-6">
                <div className="w-full md:w-1/2">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">About Grace Collection</h1>
                    <p className="mb-4">Grace Collection Jewelry located in Chiang Mai is one of Thailand’s leading jewelry shop and studio.</p>
                    <p className="mb-4">Established in 1994, Grace Collection has continued to delight many visitors with the vision of combining modern Thai and Western design with traditional craftsmanship.</p>
                    <p className="mb-4">The studio specialize in handmade jewelry of superior finish and detail. We have an original collection range in addition to an exquisite made to order service. 
                        The team is extremely experienced in remodeling jewelry and creating bespoke designs that is a perfect fit to each client.
                    </p>
                </div>
                <div className="w-full md:w-1/2 md:flex md:justify-end md:ml-6">
                    <div className="relative w-full max-w-[450px] h-[300px]">
                        <Image 
                            src="/images/about-banner.jpg"
                            layout="fill"
                            objectFit="contain"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}