import React from 'react';
import Image from 'next/image';
import Apple from '../assets/Apple.png';
import Google from '../assets/Google.png';
import Logo from '../assets/Logo.png';
import Microsoft from '../assets/Microsoft.png';
import Slack from '../assets/Slack.png';


export default function OurSponsors() {
  return (
    <div>
        <div className=' items-center w-[1922px] h-[538px] top-[3087px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] gap-[100px]'>
            <h1 className='w-[1482px] h-[87px] font-[700] text-[72px] leading-[87.14px] tracking-[-2%] text-center'>
            Our sponsors
            </h1>
            <div className='w-[1482px] h-[71px] justify-between flex mt-[100px] justify-self-center'>
            <div className='w-[55.72px] h-[68px] gap-[4px] '>
                <Image
                src = {Apple}
                width={55.47}
                height={68}
                alt='Apple'
                />
            </div>
            <div className='w-[287px] h-[62px] gap-[4px] '>
                <Image
                src = {Microsoft}
                width={287}
                height={62}
                alt='Microsoft'
                />
            </div>
            <div className='w-[280px] h-[71px] gap-[4px] '>
                <Image
                src = {Slack}
                width={280}
                height={71}
                alt='Slack'
                />
            </div>
            <div className='w-[211px] h-[69.81px] gap-[4px] '>
                <Image
                src = {Google}
                width={211}
                height={69.81}
                alt='Google'
                />
            </div>
            
            </div>
        </div>
    </div>
  )
}