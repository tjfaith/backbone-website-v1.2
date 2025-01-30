import { Img4 } from '@/public/assets'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const JoinUsIndividual = () => {
    return (
        <div className='w-full relative   '>
            <Image src={Img4} alt="image 4" className='object-cover  rounded-xl shadow-xl h-full w-full ' />
            <div className='absolute  top-20  p-8 text-background  '>
                <div className='uppercase text-base font-medium mb-2'>Individuals</div>
                <div className='clash-display-font text-4xl font-medium text-accent3-300 tracking-wide max-w-lg mb-4'>Simplify everyday payments, from money transfers to bill payments.</div>
                <div className='flex items-center space-x-1 text-base font-medium'><span>Get started as an individual</span><Icon icon="ri:arrow-right-s-line" /></div>
            </div>
        </div>
    )
}

export default JoinUsIndividual