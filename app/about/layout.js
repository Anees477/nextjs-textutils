import { Inter } from "next/font/google";
import About from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: " About - TextUtils App",
    description: "This is the website which is providing you a different facilities like text to uppercase, lowercase, clear, remove extra spaces, copy a text etc",
};

export default function AboutLayout({ children }) {
    return (
        <>
            <About />
        </>
    );
}
