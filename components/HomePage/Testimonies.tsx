import { Divider } from '@heroui/divider'
import { Spacer } from '@heroui/spacer'
import React, { Fragment } from 'react'

const Testimonies = () => {
    const testimoniesList = [
        {
            message: '“At Backbone, every feature is designed with you in mind. Whether you’re transferring funds across borders, scaling your business globally, or driving donations for a cause, we’re here to deliver more than just a payment service.”',
            name: 'Charles Emmanuel',
            post: 'CEO, Omeri co'
        },
        {
            message: '“At Backbone, every feature is designed with you in mind. Whether you’re transferring funds across borders, scaling your business globally, or driving donations for a cause, we’re here to deliver more than just a payment service.”',
            name: 'Charles Emmanuel',
            post: 'CEO, Omeri co'
        },
        {
            message: '“At Backbone, every feature is designed with you in mind. Whether you’re transferring funds across borders, scaling your business globally, or driving donations for a cause, we’re here to deliver more than just a payment service.”',
            name: 'Charles Emmanuel',
            post: 'CEO, Omeri co'
        }
    ]
    return (
        <div className='max-w-screen-2xl mx-auto lg:px-28 px-6 bg-primary py-16 text-background'>
            <div className=' mb-10'>
                <div className='clash-display-font text-5xl tracking-tight mb-4'>What are people saying about us</div>
                <div className=' max-w-3xl text-lg tracking-wider'>Imagine a world where payments aren’t just transactions but opportunities—opportunities to connect, to grow, and to thrive.</div>
            </div>

            <div className=' grid grid-cols-3 gap-5'>
                {testimoniesList.map((item, index) => (
                    <div key={index} className=' flex gap-5'>
                        {index > 0 && <Divider className=' bg-background' orientation='vertical' />}
                        <div>
                            <div className=' text-justify'>{item.message}</div>
                            <Spacer y={20} />
                            <div>
                                <div>{item.name}</div>
                                <div>{item.post}</div>
                            </div>
                        </div>
                    </div>

                ))
                }
            </div>
        </div>
    )
}

export default Testimonies