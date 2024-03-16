import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600", "700", "800"],
});
export default function HomePage() {
    return (
        <main className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-cyan-500 to-blue-500">
            <h1
                className={cn(
                    "text-6xl font-semibold text-white drop-shadow-md",
                    poppins.className
                )}
            >
                🔐Authentication
            </h1>
            <p className="txt-white text-lg">
                A simple authentication system service
            </p>
            <div>
                <LoginButton>
                    <Button variant="secondary" className="mt-4">
                        Sign in
                    </Button>
                </LoginButton>
            </div>
        </main>
    );
}
