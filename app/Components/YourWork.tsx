import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function YourWork() {
  return (
    <div>
        <div className=' justify-center w-[1921px] h-[574px] top-[2513px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] bg-[#043873] items-center'>
            <div className=' justify-center w-[1481px] h-[294px] gap-[60px] text-center items-center'>
                <div className='w-[1064px] h-[171px] gap-[24px] justify-self-center'>
                    <h1 className='w-[1064px] h-[87px] font-[700] text-[65px] leading-[87.14px] tracking-[-2%] text-white'>
                    Your work, everywhere you are
                    </h1>
                    <h1 className='w-[1064px] h-[60px] font-[400] text-[18px] leading-[30px] tracking-[-2%] text-white'>
                    Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. 
                    The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                    </h1>
                </div>
                <br /><br />
                <div className='mt-2 w-[195px] h-[63px] rounded-[8px] pt-[20px] pr-[40px] pb-[20px] pl-[40px] gap-[10px] bg-[#4F9CF9] justify-self-center'>
                    <h1 className=' flex w-[120px] h-[23px] font-[500] text-[18px] leading-[23px] tracking-[-2%] text-white'>
                    Try Taskey <span className='mt-1 ml-1'><FontAwesomeIcon icon ={faArrowRight} height={14} width={14}/></span>
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}