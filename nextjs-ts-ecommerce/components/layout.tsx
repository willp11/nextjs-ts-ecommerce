import Header from "./header/header";
import Footer from "./footer";
import { useMessage } from "../hooks/useMessage";
import UpdateCartMsg from "./header/updateCartMsg";

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {

    const {message, setMessage} = useMessage();

    return (
        <div>
            <div className="relative w-full min-h-[100vh] bg-[#f0f4ff] flex flex-col justify-between">
                <div className="flex flex-col justify-start">
                    <Header />
                    {children}
                </div>
                <Footer />
                <UpdateCartMsg message={message} />
            </div>
        </div>
    )
}