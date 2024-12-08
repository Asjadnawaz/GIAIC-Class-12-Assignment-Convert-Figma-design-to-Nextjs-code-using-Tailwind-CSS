import React from 'react';
import Image from 'next/image';
import Logo from '../assets/Logo.png';

export default function Footer() {
  return (
    <div>
      <div className='w-[1920px] h-[461px] top-[3626px] pt-[140px] pr-[220px] pb-[32px] pl-[220px] bg-[#043873]'>
        <div className='w-[1480px] h-[289px] grid gap-[100px]'>
          <div className='w-[1480px] h-[169px] gap-[100px] flex'>
            <div className='w-[295px] h-[169px] grid gap-[15px]'>
              <Image
                src={Logo}
                alt='logo'
                width={191}
                height={34}
              />
              <h1 className='w-[244px] h-[120px] font-[400] text-[18px] leading-[30px] tracking-[-2%] text-[#F7F7EE]'>
                whitepace was created for the new ways we live and work. We make a better workspace around the world
              </h1>
            </div>

            <div className='w-[295px] h-[127px] grid gap-[15px]'>
              <h1 className='w-[68px] h-[22px] font-[700] text-[18px] leading-[21.78px] tracking-[-2%] text-[#F7F7EE]'>
                Product
              </h1>
              <h1 className='w-[70px] h-[20px] font-[400] text-[16px] leading-[20px] tracking-[-2%] text-[#FFE492]'>
                Overview
              </h1>
              <h1 className='w-[50px] h-[20px] font-[400] text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]'>
                Pricing
              </h1>
              <h1 className='w-[177px] h-[20px] font-[400] text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]'>
                Customer Stories
              </h1>

            </div>

            <div className='w-[295px] h-[130px] grid gap-[16px]'>
              <h1 className='w-[91px] h-[22px] font-[700] text-[18px] leading-[21.78px] tracking-[-2%] text-[#F7F7EE]'>
                Resorces
              </h1>
              <h1 className='w-[33px] h-[20px] font-[400] text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]'>
                Blog
              </h1>
              <h1 className='w-[140px] h-[20px] font-[400] text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]'>
                Guides & tutorials
              </h1>
              <h1 className='w-[130px] h-[20px] font-[400] text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]'>
                Help center
              </h1>

            </div>


            <div className='w-[295px] h-[130px] grid gap-[16px]'>
              <h1 className='w-[83px] h-[22px] font-[700] text-[18px] leading-[21.78px] tracking-[-2%] text-[#F7F7EE]'>
                Company
              </h1>
              <h1 className='w-[70px] h-[20px] font-[400] text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]'>
                About Us
              </h1>
              <h1 className='w-[62px] h-[20px] font-[400] text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]'>
                Careers
              </h1>
              <h1 className='w-[99px] h-[20px] font-[400] text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF]'>
                Media kit
              </h1>

            </div>

            </div>
            <div className='w-[1480px] h-[20px] justify-between text-center'>
              <div className='w-[169px] h-[20px] grid gap-[60px] justify-self-center'>
                <h1 className='w-[176px] h-[20px] font-[400] text-[16px] leading-[20px] tracking-[-2%] text-[white] '>
                ©2021 Whitepace LLC.
                </h1>
              </div>



          </div>

        </div>

      </div>
    </div>
  )
}