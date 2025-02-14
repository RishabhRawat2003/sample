import React from 'react'
import Img1 from '../../assets/section6a.png'
import Img2 from '../../assets/section6b.png'
import Img3 from '../../assets/section6c.png'
import { FaArrowRightLong } from "react-icons/fa6";


function Section6() {
    const data = [
        {
            id: 1,
            title: 'Date warehouse vs. Data lake vs. Data lakehouse',
            description: 'Check out our definitive guide to data storage solutions to figure out which one will serve your business needs best.',
            img: Img1
        },
        {
            id: 2,
            title: 'What are the costs associated with facial recognition system development?',
            description: 'Explore the factors influencing facial recognition system costs and get a cost estimate for a custom solution',
            img: Img2
        },
        {
            id: 3,
            title: 'Evaluating the Costs of AI Implementation in Healthcare',
            description: 'Explore the cost factors of AI in healthcare and discover how it can reduce future expenses',
            img: Img3
        },
        {
            id: 4,
            title: 'AI Agents: What are they and how to implement them',
            description: 'Discover AI agents, their applications in healthcare, finance, and beyond, and learn how ITRex can help you implement them.',
            img: Img1
        }
    ]

  return (
    <div className='w-full h-auto flex flex-col py-8 lg:py-14'>
        <h1 className='font-bold text-xl sm:text-2xl lg:text-4xl px-5 md:px-10 lg:px-20'>Latest thinking</h1>
        <div className='w-full h-auto flex gap-4 my-8 overflow-x-scroll px-3 md:gap-8 xl:gap-10 lg:my-14' style={{
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
        <div className='w-full h-auto px-5 md:px-10 lg:px-20 flex gap-2 items-center md:gap-4'>
            <span className='font-semibold text-lg md:text-xl'>Explore more insights</span>
            <span className='bg-[#0553B0] p-1.5 md:p-2 rounded-full'>
                <FaArrowRightLong size={15} className='text-white' />
            </span>
        </div>
    </div>
  )
}

export default Section6