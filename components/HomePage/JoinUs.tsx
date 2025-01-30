'use client'
import { Divider } from '@heroui/divider'
import { Spacer } from '@heroui/spacer'
import { Tab, Tabs } from '@heroui/tabs'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { JoinUsBusinesses, JoinUsIndividual, JoinUsNonprofit } from '@/components'
import { motion, AnimatePresence } from 'framer-motion'

const JoinUs = () => {
    const [selectedTab, setSelectedTab] = useState<any>("individuals");

    const components = [
        { key: "individuals", component: <JoinUsIndividual />, color: "bg-accent3" },
        { key: "businesses", component: <JoinUsBusinesses />, color: "bg-accent2" },
        { key: "nonprofits", component: <JoinUsNonprofit />, color: "bg-accent1" },
    ];

    const orderedComponents = components.sort((a, b) =>
        a.key === selectedTab ? -1 : b.key === selectedTab ? 1 : 0
    );

    return (
        <div className='max-w-screen-2xl mx-auto lg:px-28 px-6 py-36 flex items-start justify-between gap-11  '>
            <div className={`${orderedComponents[0].color} p-4  max-w-md rounded-2xl flex flex-col justify-between transition-all ease-in-out duration-300`}>
                <div>
                    <div className=' text-background text-base font-medium inline-flex flex-col '>
                        <div className='flex items-center gap-1'>
                            <Icon icon="ri:group-fill" />
                            <span>Who do we serve?</span>
                        </div>
                        <Divider className='bg-background' />
                    </div>
                    <div className='clash-display-font text-5xl font-medium text-background max-w-xs pr-3 leading-tight  tracking-wider'>
                        Join us to Redefine the Way You Make Payment!
                    </div>
                </div>
                <Spacer y={40} />
                <div>
                    <Divider orientation='horizontal' className='bg-background ' />

                    <Tabs selectedKey={selectedTab} onSelectionChange={setSelectedTab} aria-label="entity" className=' mt-4' fullWidth variant='light' classNames={{ tabContent: 'text-primary-200 text-lg font-medium', cursor: 'text-foreground-950' }}>
                        <Tab key="individuals" title="Individuals" className='text-background text-sm font-normal tracking-wide'>
                            We streamline payments for individuals, businesses, and nonprofits, creating possibilities you never thought possible.
                        </Tab>
                        <Tab key="businesses" title="Businesses" className='text-background text-sm font-normal tracking-wide'>
                            We empower businesses with seamless payment solutions, enabling you to focus on growth and customer satisfaction. From secure transactions to tailored payment options, we help businesses thrive in an increasingly digital world.
                        </Tab>
                        <Tab key="nonprofits" title="Nonprofits" className='text-background text-sm font-normal tracking-wide'>
                            Maximize your impact with our streamlined payment solutions designed for nonprofits. Simplify donations, enhance donor engagement, and focus more on driving meaningful change for the communities you serve.

                        </Tab>
                    </Tabs>
                </div>

            </div>

            <div className='flex-grow  relative'>
                <div className='absolute inset-x-0 top-20  px-6 transition-all duration-400 ease-in-out '>
                    {orderedComponents[2].component}


                </div>
                <div className='absolute inset-x-0 top-10 px-3 transition-all duration-400 ease-in-out '>
                    {orderedComponents[1].component}


                </div>
                <div className='absolute inset-x-0 top-0 transition-all duration-400 ease-in-out '>
                    {orderedComponents[0].component}
                </div>
            </div>

        </div>
    )
}

export default JoinUs