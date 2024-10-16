import { Inter } from "next/font/google";
import Contact from "./page"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Contact - TextUtils App",
    description: "This is the website which is providing you a different facilities like text to uppercase, lowercase, clear, remove extra spaces, copy a text etc",
};

export default function HomeLayout({ children }) {
    return (
        <>
        <Contact/>
        </>
    );
}
