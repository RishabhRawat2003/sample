import React from 'react'
import Img1 from '../../assets/section5a.png'
import Img2 from '../../assets/section5b.png'
import Img3 from '../../assets/section5c.png'
import Img4 from '../../assets/section5d.png'


function Section5() {

    const data = [
        {
            id: 1,
            title: 'Strategic thinking',
            description: 'By deeply understanding your challenges and business objectives, we design a technology roadmap that positions your business for long-term success.',
            img: Img1
        },
        {
            id: 2,
            title: 'Starting small',
            description: 'We prioritize simple use cases at the beginning of your transformation journey to demonstrate value and build momentum',
            img: Img2
        },
        {
            id: 3,
            title: 'Rapid value delivery',
            description: 'We build an MVP, test, gather feedback, and iteratively enhance based on user input and evolving business needs.',
            img: Img3
        },
        {
            id: 4,
            title: 'Innovating at scale',
            description: "We're expanding your system's functionality while maintaining flexibility, human adaptability, and scalability to support your business growth.",
            img: Img4
        },
    ]

    return (
        <div className='w-full h-auto flex flex-col bg-[#E9F3FF] py-6 md:py-10 px-5 md:px-10 lg:px-20'>
            <h1 className='text-[#0553B0] font-bold text-xl md:text-xl xl:text-3xl'>Our Collaboration Process</h1>
            <div className='w-full h-auto grid grid-cols-1 gap-8 sm:grid-cols-2 my-8 lg:gap-14 md:my-14 xl:my-20'>
                {
                    data.map((item) => (
                        <div className='w-full h-auto flex flex-col md:flex-row gap-4 xl:gap-8 xl:w-[90%]' key={item.id}>
                            <div className='w-24 h-24 bg-white flex justify-center items-center rounded-xl mx-auto md:mx-0 md:w-32 lg:w-40 lg:h-28'>
                                <img src={item.img} alt="img" className='w-20 md:w-24' />
                            </div>
                            <div className='w-full h-auto flex flex-col md:w-[90%] gap-2'>
                                <h1 className='font-bold text-lg md:text-lg xl:text-xl text-center md:text-start'>{item.title}</h1>
                                <p className='text-sm md:text-base xl:text-lg text-gray-600 md:text-xs'>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-full h-auto'>
                <button className='bg-[#0553B0] px-5 py-2 text-white rounded-lg cursor-pointer font-bold text-sm md:text-base xl:text-lg'>Let's work together</button>
            </div>
        </div>
    )
}

export default Section5