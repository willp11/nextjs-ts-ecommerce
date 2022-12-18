import { useState } from "react";
import Spinner from "../components/spinner";

export default function Contact() {

    const [mapLoaded, setMapLoaded] = useState(false);

    return (
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center px-6 py-4">
            <div className="w-full flex flex-col lg:flex-row items-start">
                <div className="w-full lg:w-auto flex flex-col xs:flex-row lg:flex-col mb-4 lg:mb-0 lg:mr-8">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight mb-4">Shop Location</h2>
                        <div className="mb-4">
                            <p>Central Airport Plaza</p>
                            <p>Mueang Chiang Mai</p>
                            <p>Thailand 50100</p>
                        </div>
                        <div>
                            <p>Tel. (+66)987654321</p>
                        </div>
                    </div>
                    <div className="ml-0 xs:ml-8 lg:ml-0 mt-4 xs:mt-0 lg:mt-4">
                        <h2 className="text-2xl font-bold tracking-tight mb-4">Opening Hours</h2>
                        <p>Monday to Sunday</p>
                        <p>10:00am - 6:00pm</p>
                    </div>
                </div>
                {!mapLoaded && <Spinner size="regular" />}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.6466482504816!2d98.97306701538157!3d18.76931396641701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3064a3be5e37%3A0x8f23ed4e32a53d60!2sCentral%20Chiang%20Mai%20Airport!5e0!3m2!1sen!2sth!4v1663042260623!5m2!1sen!2sth" 
                    width="600" 
                    height="450" 
                    className="w-full max-w-[768px] border-0"
                    loading="lazy"
                    onLoad={()=>setMapLoaded(true)} // eslint-disable-line react/no-unknown-property
                >
                </iframe>
            </div>
        </div>
    )
}