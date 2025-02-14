import React from 'react'
import Img1 from '../../assets/section6a.png'
import Img2 from '../../assets/section6b.png'
import Img3 from '../../assets/section6c.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function Section4() {
    const data = [
        {
            id: 1,
            title: 'AI software for the leading global retailer',
            description: 'A robust AI-powered data ecosystem with self-service BI capabilities for a global retailer. Designed to handle 13 million daily requests, it integrates data from various sources, enabling data-driven decision-making across the enterprise.',
            img: Img1
        },
        {
            id: 2,
            title: 'AI software for the leading global retailer',
            description: 'A robust AI-powered data ecosystem with self-service BI capabilities for a global retailer. Designed to handle 13 million daily requests, it integrates data from various sources, enabling data-driven decision-making across the enterprise.',
            img: Img2
        },
        {
            id: 3,
            title: 'AI software for the leading global retailer',
            description: 'A robust AI-powered data ecosystem with self-service BI capabilities for a global retailer. Designed to handle 13 million daily requests, it integrates data from various sources, enabling data-driven decision-making across the enterprise.',
            img: Img3
        },
        {
            id: 4,
            title: 'AI software for the leading global retailer',
            description: 'A robust AI-powered data ecosystem with self-service BI capabilities for a global retailer. Designed to handle 13 million daily requests, it integrates data from various sources, enabling data-driven decision-making across the enterprise.',
            img: Img1
        }
    ]

    return (
        <div className='w-full h-auto flex flex-col py-8 lg:py-14'>
            <h1 className='font-bold text-xl sm:text-2xl lg:text-4xl px-5 md:px-10 lg:px-20'>Lastest Projects</h1>
            <div className='relative w-full h-auto flex gap-4 my-8 px-3 lg:my-14'>
                <div className='w-full h-auto flex gap-4 md:gap-8 overflow-x-scroll xl:gap-10' style={{
                    scrollbarWidth: 'none'
                }}>
                    {
                        data.map((item) => (
                            <div className='min-w-full h-auto flex flex-col gap-2 sm:min-w-[400px] lg:min-w-[500px]' key={item.id}>
                                <img src={item.img} alt="img" className='w-full h-60 object-cover rounded-lg lg:h-80 lg:rounded-xl' />
                                <h1 className='font-semibold text-xl lg:text-2xl'>{item.title}</h1>
                                <p className='text-gray-500'>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
                <span className='absolute top-1/2 left-2 translate-x-1/2 -translate-y-1/2 bg-[#0553B0] p-2 md:p-4 rounded-full'>
                    <FaArrowLeftLong size={15} className='text-white' />
                </span>
                <span className='absolute top-1/2 right-10 translate-x-1/2 -translate-y-1/2 bg-[#0553B0] p-2 md:p-4 rounded-full'>
                    <FaArrowRightLong size={15} className='text-white' />
                </span>
            </div>
            <div className='w-full h-auto flex gap-6 sm:flex-row sm:justify-between sm:items-center flex-col px-5 md:px-10 lg:px-20'>
                <div className='w-auto h-auto gap-2 flex md:gap-3'>
                    <span className='font-semibold text-lg md:text-xl'>View All</span>
                    <span className='bg-[#0553B0] p-1.5 md:p-2 rounded-full'>
                        <FaArrowRightLong size={15} className='text-white' />
                    </span>
                </div>
                <div className='w-auto h-auto'>
                    <button className='bg-[#0553B0] px-5 py-2 text-white rounded-lg cursor-pointer font-bold text-sm md:text-base xl:text-lg'>Innovate with us</button>
                </div>
            </div>
        </div>
    )
}

export default Section4