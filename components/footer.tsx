import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full">
            <div className="w-full max-w-[1200px] mx-auto bg-white flex flex-col md:flex-row p-4 items-center md:items-start justify-between">
                <div className="w-full p-4 lg:w-1/2 lg:mr-6">
                    <h2 className="text-2xl font-bold tracking-tight mb-4">About Nova</h2>
                    <p className="tracking-tight mb-4">Nova Collection Jewelry is one of Thailand’s leading independent jewelry shop and studio. Made with love from Chiang Mai.</p>
                    <p className="tracking-tight mb-4">Please see more information <Link href="/about"><a className="underline text-blue-600 hover:text-blue-700">about us</a></Link> and view our 
                        <Link href="/jewelry">
                            <a className="underline text-blue-600 hover:text-blue-700"> collection</a>
                        </Link>.
                    </p>
                    <p className="tracking-tight mb-2">Secure Payment with Stripe.</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between w-full lg:w-1/2">
                    <div className="w-full p-4 lg:w-1/2 mx-auto">
                        <h2 className="text-2xl font-bold tracking-tight mb-4">Customer Service</h2>
                        <p className="font-semibold mb-2">Contact Us</p>
                        <p className="font-semibold mb-2">Call Now: xxx xxx xxx</p>
                        <p className="font-semibold mb-2">Line & Whatsapp: xxx xxx xxxx</p>
                        <p className="font-semibold mb-2">Make an Appointment</p>
                    </div>

                    <div className="w-full p-4 lg:w-1/2">
                        <h2 className="text-2xl font-bold tracking-tight mb-4">Social</h2>
                        <p className="font-semibold mb-2">Like us on Facebook</p>
                        <p className="font-semibold mb-2">Follow us on Instagram</p>
                    </div>
                </div>
            </div>
        </div>
    )
}