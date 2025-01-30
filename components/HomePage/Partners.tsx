import { Fincra, FlutterWave, Graph, Gray, IvoryPay, JuicyWay, Klasha, Obsidian, PayAza, Waza, WeWire, YellowCard } from '@/public/assets'
import { Image } from '@heroui/image'
import React from 'react'
import CountUp from 'react-countup'

const Partners = () => {
    return (
        <div className='max-w-screen-2xl mx-auto lg:px-28 px-6 py-16 grid grid-cols-2  '>
            <div className=''>
                <div className='clash-display-font'>
                    <span className='text-foreground-950 text-5xl font-medium'><CountUp enableScrollSpy scrollSpyOnce duration={5} end={4.5} decimals={1} /></span><span className='text-foreground text-2xl font-medium'>/5</span>
                    <span className=' italic text-foreground-950 text-base font-medium ml-1'>User Satisfaction Rating</span>
                </div>
                <div className='text-foreground-950 text-5xl font-medium leading-tight max-w-2xl clash-display-font'>
                    Trusted by Hundreds of Partners Across different Countries.
                </div>
            </div>
            <div className='grid-cols-3 inline-grid justify-end justify-items-center gap-10'>
                <Image radius='none' src={FlutterWave.src} alt="flutterwave logo" />
                <Image radius='none' src={YellowCard.src} alt="Yellowcard logo" />
                <Image radius='none' src={Gray.src} alt="Gray logo" />
                <Image radius='none' src={Fincra.src} alt="Fincra logo" />
                <Image radius='none' src={Obsidian.src} alt="Obsidian logo" />
                <Image radius='none' src={Waza.src} alt="Waza logo" />
                <Image radius='none' src={Klasha.src} alt="Klasha logo" />
                <Image radius='none' src={IvoryPay.src} alt="IvoryPay logo" />
                <Image radius='none' src={JuicyWay.src} alt="JuicyWay logo" />
                <Image radius='none' src={WeWire.src} alt="WeWire logo" />
                <Image radius='none' src={Graph.src} alt="Graph logo" />
                <Image radius='none' src={PayAza.src} alt="PayAza logo" />
            </div>
        </div >
    )
}

export default Partners