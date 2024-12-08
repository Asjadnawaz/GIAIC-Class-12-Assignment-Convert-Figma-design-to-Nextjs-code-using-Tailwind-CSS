import React from 'react';
import Image from 'next/image';
import worktogether from '../assets/Work Together Image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function WorkManagement() {
  return (
    <div>
        <div className='w-[1920px] h-[1588px] top-[921px] left-[1px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] gap-[100px]'>
            <div className='flex w-[1480px] h-[547px] gap-[60px]'>
            <div className='w-[672px] h-[411px] gap-[60px]'>
                <div className='w-[672px] h-[288px]'>
                    <h1 className='w-[672px] h-[174px] font-[700] text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]'>
                    Project Management
                    </h1>
                    <br />
                    <h1 className='w-[672px] h-[90px] font-[400] text-[18px] leading-[30px] tracking-[-2%] text-[#212529]'>
                    Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note
                    </h1>
                </div>
<br /><br /><br />
            <div className='w-[201px] h-[63px] rounded-[6px] pt-[20px] pr-[40px] pb-[20px] pl-[40px] gap-[10px] bg-[#4F9CF9]'>
        <h1 className=' flex gap-[4px] w-[150px] h-[23px] font-[500px] text-[18px] leading-[23px] tracking-[-2%] text-[white]'>
            Get Started <span className='mt-1 ml-1'><FontAwesomeIcon icon ={faArrowRight} height={14} width={14}/></span>
        </h1>
        
            </div>
            </div>
            <div className='w-[748px] h-[547px] bg-[#C4DEFD]'></div>
            </div>
            <br /><br />
            <WorkTogether/>
        </div>
        
    </div>
  )
}

function WorkTogether () {
    return (
        <div className='flex w-[1480px] h-[661px] gap-[100px] justify-center items-center'>
            <Image
            src={worktogether}
            alt='workTogether'
            width={710}
            height={661}
            />
            <div className='w-[670px] h-[294px] gap-[60px]'>
                <div className='w-[670px] h-[171px]'>
                    <h1 className='w-[670px] h-[87px] font-[700] text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]'>
                    Work together
                    </h1>
                    <br />
                    <h1 className='w-[670px] h-[60px] font-[400] text-[18px] leading-[30px] tracking-[-2%] text-[#212529]'>
                    With whitepace, share your notes with your colleagues and collaborate on them.
                    You can also publish a note to the internet and share the URL with others.
                    </h1>
                </div>
<br /><br /><br />
            <div className='w-[201px] h-[63px] rounded-[6px] pt-[20px] pr-[40px] pb-[20px] pl-[40px] gap-[10px] bg-[#4F9CF9]'>
        <h1 className=' flex gap-[4px] w-[150px] h-[23px] font-[500px] text-[18px] leading-[23px] tracking-[-2%] text-[white]'>
            Get Started <span className='mt-1 ml-1'><FontAwesomeIcon icon ={faArrowRight} height={14} width={14}/></span>
        </h1>
        
            </div>
            </div>
            <div className='w-[748px] h-[547px] bg-[#C4DEFD]'></div>
            </div>
    )
}