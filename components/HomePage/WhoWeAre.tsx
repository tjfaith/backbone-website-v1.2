import { DigitalTransaction, Innovation, LockImg, Rates, User1, User2, User3, User4, WorldMap } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
const WhoWeAre = () => {
    return (
        <div className='max-w-screen-2xl mx-auto lg:px-28 px-6 py-10'>
            <div className=' flex flex-col items-center justify-center mb-6'>
                <div className='text-foreground-950 text-4xl font-medium clash-display-font'>Why Everyone Trusts Backbone.</div>
                <div className='text-foreground text-lg font-normal max-w-3xl text-center'>Whether it's cross-border transfers, global business scaling, or donations, we deliver more than just payments.</div>
            </div>
            <div className=' grid grid-cols-2 gap-6 '>
                <div className=' border rounded-xl bg-gradient-to-b from-background-100 from-50% to-foreground-200 shadow-sm border-foreground-300 inline-flex flex-col '>
                    <div className=' p-4 mb-16'>
                        <div className='clash-display-font text-foreground-950 text-3xl font-medium'>Built for Speed</div>
                        <div className=' text-lg text-foreground font-normal'>We offer fast and efficient transactions tailored to your timeline.</div>
                    </div>
                    <DigitalTransaction />
                </div>

                <div className=' border rounded-xl bg-background-100 shadow-sm border-foreground-300 inline-flex flex-col'>
                    <div className=' p-4 mb-16'>
                        <div className='clash-display-font text-foreground-950 text-3xl font-medium'>Secured Transactions</div>
                        <div className=' text-lg text-foreground font-normal'> We provide End-to-end encryption protecting every transaction.</div>
                    </div>
                    <div className=" flex justify-center">
                        <Image src={LockImg} alt="lock image" />
                    </div>
                </div>
            </div>

            <div className=' grid grid-cols-3 gap-6 mt-6'>
                <div className='bg-background-100 shadow-sm border rounded-xl'>
                    <div className='relative h-screen-50'>
                        <Image src={WorldMap} alt="world map" />
                        <div className='absolute bottom-36 left-20 z-10'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-delay="300"
                            data-aos-once="false"
                        >
                            <Image src={User1} alt="user 1" />
                        </div>
                        <div className='absolute top-16 right-20 z-10'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-delay="500"
                            data-aos-once="false"
                        >
                            <Image src={User2} alt="user 2" />
                        </div>
                        <div className='absolute top-20 left-28 z-10'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-delay="700"
                            data-aos-once="false"
                        >
                            <Image src={User3} alt="user 3" />
                        </div>
                        <div className='absolute bottom-16 right-12 z-10'
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-delay="300"
                            data-aos-once="false"
                        >
                            <Image src={User4} alt="user 4" />
                        </div>
                    </div>
                    <div className=' p-4'>
                        <div className='clash-display-font text-foreground-950 text-3xl font-medium'>Global Reach</div>
                        <div className=' text-lg text-foreground font-normal'>Access to over 150 countries through trusted partnerships.</div>
                    </div>
                </div>
                <div className='bg-background-100 shadow-sm border rounded-xl'>
                    <div className='flex items-center justify-end py-4 h-screen-50'>
                        <Image src={Rates} alt="rates" />
                    </div>
                    <div className=' p-4'>
                        <div className='clash-display-font text-foreground-950 text-3xl font-medium'>Competitive Rates</div>
                        <div className=' text-lg text-foreground font-normal'>We provide you with unbeatable pricing for maximum value.</div>
                    </div>
                </div>
                <div className='bg-background-100 shadow-sm border rounded-xl'>
                    <div className=' h-screen-50 pt-8'>
                        <div className=' flex items-stretch justify-stretch '>
                            <Image src={Innovation} alt="Ino4 img" className='h-full w-full object-cover' />
                        </div>
                    </div>
                    <div className=' p-4'>
                        <div className='clash-display-font text-foreground-950 text-3xl font-medium'>Innovation</div>
                        <div className=' text-lg text-foreground font-normal'>Cutting-edge tools to streamline your payment processes.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre