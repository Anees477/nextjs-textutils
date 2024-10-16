import { Inter } from "next/font/google";
import Home from "@/app/home/page"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Home - TextUtils App",
    description: "This is the website which is providing you a different facilities like text to uppercase, lowercase, clear, remove extra spaces, copy a text etc",
};

export default function HomeLayout({ children }) {
    return (
        <>
        <Home/>
        </>
    );
}
