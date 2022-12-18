import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {

    const router = useRouter();

    return (
        <div className="w-full bg-white">
            <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row p-4 items-center md:items-start justify-between">
                <div className="w-full p-4 lg:w-1/3 lg:mr-6">
                    <h2 className="text-2xl font-bold tracking-tight mb-4">About Grace Collection</h2>
                    <p className="tracking-tight mb-4">Grace Collection Jewelry is one of Thailand’s leading independent jewelry shop and studio.</p>
                    <p className="tracking-tight mb-4">Please see more information <Link href="/about"><a className="underline text-blue-600 hover:text-blue-700">about us</a></Link> and view our <Link href="/jewelry"><a className="underline text-blue-600 hover:text-blue-700">collection</a></Link>.
                    </p>
                    <p className="tracking-tight mb-2">Secure Payment with Stripe.</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between w-full lg:w-2/3">
                    <div className="w-full p-4 lg:w-1/2 mx-auto">
                        <h2 className="text-2xl font-bold tracking-tight mb-4">Customer Service</h2>
                        <p className="font-semibold mb-2 text-blue-700 underline cursor-pointer" onClick={()=>router.push('/contact')}>Contact Us</p>
                        <p className="font-semibold mb-2">Call Now: (+66)987654321</p>
                        <p className="font-semibold mb-2">Line: (+66)987654321</p>
                    </div>

                    <div className="w-full p-4 lg:w-[220px]">
                        <h2 className="text-2xl font-bold tracking-tight mb-4">Social</h2>
                        <p className="font-semibold mb-2">Like us on Facebook</p>
                        <p className="font-semibold mb-2">Follow us on Instagram</p>
                    </div>
                </div>
            </div>
        </div>
    )
}