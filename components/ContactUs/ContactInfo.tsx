'use client'
import { Link } from '@heroui/link'
import React from 'react'
import Image from "next/image";
import { Bar } from '@/public/assets';
import { Icon } from '@iconify/react';

const ContactInfo = () => {
    return (
        <div className=" xl:max-w-xl max-w-xs" data-aos="fade-up">
            <div className=' xl:text-5xl md:text-4xl text-3xl clash-display-font mb-3 font-medium'>
                <div className='flex items-center space-x-2 '>
                    <span className="inline-block text-warning  ">
                        Help
                        <Image
                            alt="bar"
                            className="block mx-auto w-[calc(100%)] max-w-[3ch] h-auto xl:mt-2"
                            height={50}
                            src={Bar}
                        />
                    </span>
                    <span className="text-primary">is here</span>
                </div>
                <div className='text-primary'>when you need it</div>
            </div>
            <div className=' text-primary-600 md:text-lg text-sm'>Support is always available when you need it. Contact our team when you have a question.</div>
            <div className='text-primary md:text-lg text-sm md:space-y-6 space-y-3 mt-4'>
                <div className=' flex items-start space-x-2 '><Icon icon="ri:map-pin-fill" className='text-2xl' /> <span>S.95, Tafawa Balewa Square, Race Course, Onikan, Lagos.</span></div>
                <Link
                    className="md:text-lg text-sm  flex items-center space-x-2"
                    href="mailto:sales@usecotton.io"
                >
                    <Icon icon="ri:mail-fill" /> <span>sales@mybackbone.io</span>
                </Link>
                <Link
                    className="md:text-lg text-sm flex items-center space-x-2 "
                    href="tel:+2347035849521"
                >
                    <Icon icon='ri:phone-fill' /> <span>+234 703 584 9521</span>
                </Link>
            </div>
        </div>
    )
}

export default ContactInfo