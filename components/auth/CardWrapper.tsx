"use client";

import {
    Card,
    CardHeader,
    CardFooter,
    CardContent,
} from "@/components/ui/card";
import Header from "./Header";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    // footerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

const CardWrapper = ({
    children,
    headerLabel,
    // footerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial = true,
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
};

export default CardWrapper;
