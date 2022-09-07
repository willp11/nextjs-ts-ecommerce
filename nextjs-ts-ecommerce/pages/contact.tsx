export default function Contact() {
    return (
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center px-6 py-4">
            <div className="w-full flex flex-col lg:flex-row items-start">
                <div className="w-full lg:w-auto flex flex-col xs:flex-row lg:flex-col mb-4 lg:mb-0 lg:mr-8">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight mb-4">Shop Location</h2>
                        <div className="mb-4">
                            <p>179 Thapae Road</p>
                            <p>Mueang Chiang Mai</p>
                            <p>Thailand 50100</p>
                            <p>(Next to Kasikorn Bank)</p>
                        </div>
                        <div>
                            <p>Tel. XXX-XXX-XXX</p>
                            <p>Mobile XXX-XXX-XXXX</p>
                        </div>
                    </div>
                    <div className="ml-0 xs:ml-8 lg:ml-0 mt-4 xs:mt-0 lg:mt-4">
                        <h2 className="text-2xl font-bold tracking-tight mb-4">Opening Hours</h2>
                        <p>Monday to Sunday</p>
                        <p>10:00am - 6:00pm</p>
                    </div>
                </div>

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.2256821076176!2d98.99481781538178!3d18.788093165840046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3aa473f9f9bf%3A0x465281ac026500e7!2sNova%20Collection%20Jewelry!5e0!3m2!1sen!2sth!4v1662524701755!5m2!1sen!2sth" 
                    width="600" 
                    height="450"
                    className="w-full max-w-[768px] border-0"
                    loading="lazy">  
                </iframe>
            </div>
        </div>
    )
}