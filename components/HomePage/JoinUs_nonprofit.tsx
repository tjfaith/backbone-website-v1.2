import { Img6 } from '@/public/assets'
import { Icon } from '@iconify/react'
import Image from 'next/image'
const JoinUsNonprofit = () => {
    return (
        <div className='w-full relative    '>
            <Image src={Img6} alt="image 5" className='object-cover rounded-xl shadow-xl h-full w-full ' />
            <div className='absolute  top-10 left-4  p-8 text-background  '>
                <div className='uppercase text-base font-medium mb-2'>Nonprofits</div>
                <div className='clash-display-font text-4xl font-medium text-accent1-200 tracking-wide max-w-lg mb-4'>Securely fundraise, disburse grants, and track donor contributions.</div>
                <div className='flex items-center space-x-1 text-base font-medium'><span>Learn about Non Profit services</span><Icon icon="ri:arrow-right-s-line" /></div>
            </div>
        </div>
    )
}

export default JoinUsNonprofit