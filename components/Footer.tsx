import { FullLogo } from '@/public/assets'
import { Image } from '@heroui/image'
import React from 'react'
import { Socials } from '@/components'
import { Icon } from '@iconify/react'
import { Link } from '@heroui/link'
import { Spacer } from '@heroui/spacer'
import { Divider } from '@heroui/divider'

const Footer = () => {
    return (
        <footer className='bg-primary p-10 max-w-screen-2xl mx-auto lg:px-28 px-6 text-background'>
            <div className=' flex justify-between'>
                <div>
                    <Image src={FullLogo.src} alt="full logo" className=' mb-4' />
                    <div className=' text-sm font-medium mb-8 max-w-md '>We streamline payments for individuals, businesses, and nonprofits, creating possibilities you never thought possible.</div>
                    <Socials />
                    <div className=' space-y-5 mt-16'>
                        <div className='flex items-center gap-2'>
                            <Icon icon="ri:map-pin-fill" /> <span>S.95, Tafawa Balewa Square, Race Course, Onikan, Lagos.</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Icon icon="ic:sharp-email" />
                            <Link
                                className="transition-all duration-300 ease-in-out text-background hover:text-primary-200"
                                href="mailto:support@usecotton.io"
                            >
                                <span>support@usecotton.io</span>
                            </Link>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Icon icon="ri:phone-fill" />
                            <Link href="tel:+23480242893892" className=" whitespace-nowrap text-background hover:text-primary-200">+234 802 4289 3892</Link>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-12'>
                    <div className='text-background space-y-4'>
                        <div className='text-xl font-medium '>Company</div>
                        <ul className=' space-y-4'>
                            <li><Link href='/#about_us' className='text-primary-200'> About us</Link></li>
                            <li><Link href='/blog' className='text-primary-200'> Blog</Link></li>
                            <li><Link href='/#support' className='text-primary-200'> Support</Link></li>
                        </ul>
                    </div>
                    <div className='text-background space-y-4'>
                        <div className='text-xl font-medium '>What we offer</div>
                        <ul className=' space-y-4'>
                            <li><Link href='/#about_us' className='text-primary-200'>Individuals</Link></li>
                            <li><Link href='/blog' className='text-primary-200'> Businesses</Link></li>
                            <li><Link href='/#support' className='text-primary-200'>Non Profits</Link></li>
                        </ul>
                    </div>
                    <div className='text-background space-y-4'>
                        <div className='text-xl font-medium '>Legal</div>
                        <ul className=' space-y-4'>
                            <li><Link href='/#' className='text-primary-200'>Privacy Policy</Link></li>
                            <li><Link href='/#' className='text-primary-200'> Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Spacer y={28} />
            <Divider className='bg-background' />
            <div className=' mt-4'>Copyright &copy; {new Date().getFullYear()}, Backbone</div>
        </footer>
    )
}

export default Footer