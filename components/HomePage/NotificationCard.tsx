import React from 'react'
import { Image } from "@heroui/image";
import { HalfLogo } from '@/public/assets';
import { cn } from '@heroui/theme';

interface Props {
    className?: string,
    hideContent?: boolean
}
const NotificationCard = ({ className, hideContent = false }: Props) => {
    return (
        <div className={cn("px-3 py-2 rounded-3xl bg-background shadow-xl flex items-center gap-3 max-w-xl h-[12vh] w-full", className)}>
            {!hideContent && <>
                <Image src={HalfLogo.src} alt="half logo" radius="lg" className=" p-3 bg-primary w-28" sizes="sm" />
                <div>
                    <div className="flex items-center justify-between max-w-md mr-8">
                        <div className="clash-display-font text-2xl text-foreground-950 font-medium">Transaction successful</div>
                        <div className="text-foreground-400 text-lg font-normal">Just now</div>
                    </div>
                    <div className=" text-sm tracking-wide">Your transfer of $5,000 to Charles Emmanuel was successful. Thank you for trusting Backbone!</div>
                </div>
            </>}
        </div>
    )
}

export default NotificationCard