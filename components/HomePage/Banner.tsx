import { Earth } from '@/public/assets'
import { Avatar, AvatarGroup } from '@heroui/avatar';
import { Icon } from '@iconify/react';
import Image from 'next/image'
import React from 'react'
import CountUp from "react-countup";
import { CustomButton } from '@/components';
import { Button } from '@heroui/button';

const Banner = () => {
    return (
        <div className='relative overflow-hidden'>
            <div
                className="h-screen bg-[radial-gradient(ellipse_at_40%_40%,_var(--tw-gradient-stops))] from-accent1 from-0% via-primary via-50% to-primary to-100% ">
                <div className='w-full h-screen absolute bottom-0 bg-[radial-gradient(ellipse_at_20%_90%,_var(--tw-gradient-stops))] from-accent2-600/50 from-0%  via-transparent via-40%  to-transparent to-100%'></div>

                <div className='h-screen absolute inset-0 z-10 bg-primary/60 pointer-events-none'></div>


                <div className=' absolute inset-0 h-screen flex items-center max-w-screen-2xl mx-auto lg:px-28 px-6 justify-start  z-20'>
                    <div>
                        <div className=' bg-gradient-to-b from-primary-300 via-primary-300 to-primary-800 text-background rounded-full p-2 inline-flex items-center gap-3 mb-4'>
                            <AvatarGroup total={9}>
                                <Avatar classNames={{ base: 'bg-transparent' }} icon={<Icon icon="emojione:flag-for-nigeria" className="text-3xl h-full w-full" />} />
                                <Avatar classNames={{ base: 'bg-transparent' }} icon={<Icon icon="emojione:flag-for-united-states" className="text-3xl  h-full w-full" />} />
                                <Avatar classNames={{ base: 'bg-transparent' }} icon={<Icon icon="circle-flags:gb" className="text-3xl  h-full w-full" />} />
                                <Avatar classNames={{ base: 'bg-transparent' }} icon={<Icon icon="circle-flags:cn" className="text-3xl  h-full w-full" />} />

                            </AvatarGroup>
                            <div>
                                <span>We have processed </span> $<CountUp enableScrollSpy scrollSpyOnce duration={10} end={249000000} /><span> in transaction in {new Date().getFullYear() - 1}.</span>
                            </div>
                        </div>

                        <div className=' text-6xl font-medium text-background clash-display-font mb-3 space-y-1'>
                            <div className='flex items-center gap-2'>
                                <div>Empowering</div> <div className='py-1 pl-1 pr-10 border-l-2 border-accent3 bg-gradient-to-r from-accent3/40 from-20% via-accent3/3 to-transparent'>Payments</div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div>Unlocking</div> <div className='py-1 pl-1 pr-10 border-l-2 border-accent2 bg-gradient-to-r from-accent2/40 from-20% via-accent2/3 to-transparent'>Possibilities</div>
                            </div>
                        </div>

                        <div className='text-background text-lg font-normal max-w-2xl mb-8'>
                            Where individuals, businesses, and nonprofits connect to a seamless global payment solution spanning 150+ countries.
                        </div>
                        <div className='flex items-center gap-4'>
                            <CustomButton fullWidth={false}>Get Started Now</CustomButton>
                            <Button className='text-foreground text-base font-medium border-2 bg-background' fullWidth={false}>Learn More About Our Offerings</Button>
                        </div>
                    </div>
                </div>




                <Image src={Earth} alt="earth" className=' w-screen-55 top-24 -right-20 z-20 absolute' />


            </div>
        </div>



    )
}

export default Banner