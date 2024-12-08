import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function HeroSection(props: any) {
  let {title, description, btntext, bgColor, titleColor, descriptionColor, titleheight} = props;

  return (
    <div className= {`flex gap-[40px] h-[829px] w-[1920px] ${bgColor} pt-[140px] pr-[220px] pb-[140px] pl-[220px]`}>
        <div className='w-[656px] h-[361px] gap-[60px]'>
            <div className='w-[656px] h-[238px] gap-[24px]'>
                <h1 className= {`w-[656px] ${titleheight} font-bold text-[64px] leading-[77.45px] tracking -[-2%] ${titleColor}`}>{title}</h1>
                <br />
                <h1 className={`w-[656px] h-[60px] font-[400] text-[18px] tracking -[-2%] leading-[30px] ${descriptionColor}`}>
                {description} </h1>
                </div>
                <br /><br />
                <div className='flex w-[240px] h-[63px] rounded-[8px] p-[20px] gap-[10px] bg-[#4F9CF9] items-center'>
                    <h1 className={`flex gab-[4px] items-center w-[200px] h-[40px] font-[500] text-[18px] leading-[23px] tracking-[-2%] text-white`}>{btntext}
                    <span className='mt-1 ml-2'><FontAwesomeIcon icon ={faArrowRight} height={14} width={14}/></span></h1>
                </div>
            </div>
            <div className='image w-[824px] h-[549px] gab-[4px] bg-[#C4DEFD]'></div>
            

    </div>
  )
}