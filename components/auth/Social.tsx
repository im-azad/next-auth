"use client";

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";



const Social = () => {
    return (
        <div className="flex w-full items-center justify-center gap-4">
            <Button
                variant="outline"
                className="w-full"
                size={"lg"}
                onClick={() => console.log("google")}
            >
                <FcGoogle  className="h-6 w-6"/>
            </Button>

            <Button
                variant="outline"
                className="w-full"
                onClick={() => console.log("github")}
            >
               <FaGithub  className="h-6 w-6"/>
            </Button>
        </div>
    );
};

export default Social;
