
"use client"

import {Card, CardHeader, CardFooter, CardContent} from "@/components/ui/card"

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    footerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;

}


const CardWrapper = ({
    children,
    headerLabel,
    footerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial = true,
} : CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
        {children}
    </Card>
  )
}

export default CardWrapper