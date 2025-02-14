import React, { useState } from 'react'
import BgImg from '../../assets/section7.png'
import { MdOutlineAttachFile } from "react-icons/md";

const CustomInput = ({ label, required, inputType }) => {
    const [focus, setFocus] = useState(false);

    return (
        <div className="relative w-full lg:w-[90%]">
            {/* Label */}
            <label className="block text-white text-sm font-medium mb-1 md:text-base xl:text-lg">
                {label} {required && "*"}
            </label>

            {/* Input Field */}
            <input
                type={inputType}
                className={`w-full bg-transparent border-b ${focus ? "border-blue-400" : "border-gray-400"
                    } outline-none py-2 text-white transition-all`}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />

            {/* Circular Icon (Optional) */}
            <div className="absolute right-2 top-7 w-5 h-5 border border-white rounded-full"></div>
        </div>
    );
};

function Section7() {
    const [fileName, setFileName] = useState("");
    const [checked, setChecked] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <div className='w-full min-h-80 flex flex-col gap-6 py-8 px-5 md:py-14 lg:gap-8 xl:gap-14 xl:py-20 md:px-10 lg:px-20' style={{
            backgroundImage: `url(${BgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <h1 className='text-[#5BDCE3] w-full h-auto font-semibold text-xl sm:text-2xl lg:text-4xl'>Contact us</h1>
            <div className='w-full h-auto grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <CustomInput label="Name" inputType="text" required />
                <CustomInput label="Phone" inputType="number" required />
                <CustomInput label="Email" inputType="email" required />
                <CustomInput label="Project Info (Budget if avail.)*" required />
                <div className='w-full h-autp flex gap-1 lg:gap-2'>
                    <span className='flex pt-2'><MdOutlineAttachFile size={25} className='text-[#5bdce3] rotate-45 lg:size-9' /></span>
                    <label htmlFor="fileUpload" className='text-white font-semibold'>Attach your file <br />up to 20MB</label>
                    <input
                        type="file"
                        id="fileUpload"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
                <div className='w-full h-auto flex flex-col gap-2 lg:gap-4'>
                    <p className='font-semibold text-white text-sm lg:text-base'>We will process your personal information in accordance with our <span className='text-[#5BDCE3]'>Privacy Policy</span></p>
                    <div className='flex gap-2 items-center'>
                        <label className="relative flex items-center cursor-pointer">
                            {/* Hidden Checkbox */}
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                                className="hidden"
                            />

                            {/* Custom Circular Checkbox */}
                            <div
                                className={`w-6 h-4 md:h-5 lg:h-6 rounded-full border-2 flex items-center justify-center transition-all ${checked ? "border-blue-500 bg-blue-500" : "border-gray-400"
                                    }`}
                            >
                                {checked && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                            </div>

                            {/* Label Text */}
                            <span className="ml-2 text-white text-sm lg:text-base">I would like to be contacted with news and updates about your events and services</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto'>
                <button className='w-full h-auto py-2 flex justify-center items-center text-[#0553B0] bg-white opacity-50 rounded-lg font-semibold sm:py-3 md:py-4 sm:text-lg lg:text-xl cursor-pointer'>Send Message</button>
            </div>
        </div>
    )
}

export default Section7