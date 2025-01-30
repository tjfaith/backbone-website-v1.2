import { Img5 } from '@/public/assets'
import { Icon } from '@iconify/react'
import Image from 'next/image'
const JoinUsBusinesses = () => {
    return (

        <div className='w-full relative    '>
            <Image src={Img5} alt="image 5" className='object-cover  rounded-xl shadow-xl h-full w-full ' />
            <div className='absolute  top-10 left-4  p-8 text-background  '>
                <div className='uppercase text-base font-medium mb-2'>Businesses</div>
                <div className='clash-display-font text-4xl font-medium text-accent2-200 tracking-wide max-w-md mb-4'>Manage bulk payments, automate transactions, and grow globally.</div>
                <div className='flex items-center space-x-1 text-base font-medium'><span>Explore business solutions</span><Icon icon="ri:arrow-right-s-line" /></div>
            </div>
        </div>

    )
}

export default JoinUsBusinesses