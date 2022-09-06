import Header from "./header/header";
import Footer from "./footer";

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header />
            <div className="w-full min-h-[calc(100vh-6.5rem)] md:min-h-[calc(100vh-10.25rem)] bg-[#f0f4ff]">
                {children}
            </div>
            <Footer />
        </div>
    )
}