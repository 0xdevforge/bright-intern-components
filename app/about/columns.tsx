import React from 'react'

import localfont from "next/font/local"

const semi = localfont(
    {
        src: [
            {
                path: "../../OTF/GeneralSans-Semibold.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)
const medium = localfont(
    {
        src: [
            {
                path: "../../OTF/GeneralSans-Medium.otf"
            }
        ],
        variable: "--font-regularGeneral"
    }
)


const Columns = () => {
    return (
        <div className='bg-white text-black w-full py-16 flex gap-8  px-8'>
            <div className="lg:w-[750px] 2xl:w-2/3 lg:h-[480px] border border-[#D7D7D7] px-8 py-8">
                <span className={`text-[2rem] text-[#8980F5] ${semi.className} `}>
                    Empowering Students to Code, Complete, and Conquer
                </span>
                <p className={`text-[1.25rem] pt-6 leading-[27px] ${medium.className} `}  >
                    At BrightIntern, we've recognized an undeniable gap between the world of
                    learning and the demands of the workforce. We firmly believe that the key
                    to bridging this gap lies in providing students with opportunities to work
                    on real-time projects and test their skills. It's this belief that has driven us
                    to create a platform dedicated to empowering every student to apply their
                    skills in Codeships and leading them to best internships in tech with
                    proof-of-code
                </p>
            </div>
            <div className="lg:w-[375px] 2xl:w-1/3 lg:h-[480px] border border-[#D7D7D7] px-8 py-8">
                <p className={`text-[1.25rem] leading-[27px] ${medium.className} `}>
                    Our <span className='text-[##FF822D]'>goal</span> is to empower
                    students to build <span className='text-[#FF822D]'>projects
                    packed with meaningful
                    code contributions</span> that
                    put their skills in the
                    spotlight & help them
                    secure dream internships
                    in tech
                </p>
            </div>
        </div>
    )
}

export default Columns