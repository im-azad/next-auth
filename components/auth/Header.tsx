import { Poppins } from "next/font/google";
import {cn} from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600", "700", "800"],
});

interface HeaderProps {
    label: string;
}

export default function Header({ label }: HeaderProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1
                className={cn(
                    "text-6xl font-semibold text-slate-800 drop-shadow-md mb-6",
                    poppins.className
                )}
            >
                🔐 Auth
            </h1>
            <p className="txt-white text-lg">{label}</p>
        </div>
    );
}