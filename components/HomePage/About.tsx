import React from "react";
import { ArrowUp, Img1, Img2, Img3 } from "@/public/assets";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { NotificationCard } from "@/components";


const About = () => {
    return (
        <div className="max-w-screen-2xl mx-auto lg:px-28 px-6 space-y-12">
            {/* Global Payment */}
            <div className="bg-primary rounded-2xl text-background  flex items-end justify-between ">
                <div className="pl-8 py-16 space-y-2">
                    <div>GLOBAL PAYMENTS</div>
                    <div className="clash-display-font text-5xl font-medium max-w-md tracking-wider mb-3">
                        Fast, secure, and designed to keep you connected globally.
                    </div>
                    <div className="flex items-center gap-2 ml-10 text-base">
                        <Divider
                            orientation="horizontal"
                            className="bg-background w-10 h-[2px]"
                        />
                        <span>
                            Send and receive payments anywhere in the world with ease.
                        </span>
                    </div>
                </div>
                <Image src={ArrowUp.src} alt="arrow up" />
            </div>

            {/* Money transfer */}
            <div className="flex  items-stretch justify-between  gap-4">
                <div className=" rounded-2xl border border-accent3-400 bg-gradient-to-b from-accent3-400/30  to-accent3-400 p-8 flex-grow relative overflow-hidden ">
                    <div className="text-accent3 uppercase text-base font-medium mb-2">
                        Money transfer
                    </div>
                    <div className="text-foreground-900 text-4xl max-w-sm tracking-tight font-medium clash-display-font mb">
                        Send money seamlessly to businesses and family anywhere in the
                        world.
                    </div>
                    <div className="flex items-center text-foreground-900 gap-2 ml-10 text-base">
                        <Divider
                            orientation="horizontal"
                            className="bg-foreground-900 w-10 h-[2px]"
                        />
                        <span>
                            Send and receive payments anywhere in the world with ease.
                        </span>
                    </div>

                    <div>
                        <NotificationCard hideContent className=" absolute bottom-11 -right-32 bg-background/30 " />
                        <NotificationCard hideContent className=" absolute bottom-16 -right-24 bg-background/50" />
                        <NotificationCard hideContent className=" absolute bottom-20 -right-16 bg-background/80" />
                        <NotificationCard className=" absolute bottom-24 -right-12" />
                    </div>
                </div>
                <Image src={Img1.src} />
            </div>

            {/* Exchange */}
            <div className="flex items-center justify-between gap-4">
                <Image src={Img2.src} />
                <div className="  bg-accent2-300 pt-8 px-8 rounded-2xl flex-grow">
                    <div>
                        <div className="text-accent2 uppercase text-base font-medium mb-2">
                            Currency exchange
                        </div>
                        <div className="text-foreground-900 text-4xl max-w-sm tracking-tight font-medium clash-display-font mb">
                            Exchange major currencies effortlessly and at unbeatable rates.
                        </div>
                        <div className="flex items-center text-foreground-900 gap-2 ml-10 text-base">
                            <Divider
                                orientation="horizontal"
                                className="bg-foreground-900 w-10 h-[2px]"
                            />
                            <span>
                                we make it quick, simple, and seamless.
                            </span>
                        </div>
                    </div>
                    <Image src={Img3.src} sizes="sm" />
                </div>
            </div>
        </div>
    );
};

export default About;
