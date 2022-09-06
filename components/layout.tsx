import Header from "./header/header";
import Footer from "./footer";

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className="relative w-full min-h-[100vh] bg-[#f0f4ff] flex flex-col justify-between">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}