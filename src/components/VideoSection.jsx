import { CircleUserRound, Clapperboard, House, TvMinimalPlay } from 'lucide-react'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
function VideoSection() {
    const { dark } = useContext(ThemeContext)


    const filterTag = ["all",
        "gaming",
        "music",
        "live",
        " mixes",
        "indian music",
        "gaming",
        "music",
        "live",
        " mixes",
        "indian music",
        "gaming",
        "music",
        "live",
        " mixes",
        "indian music",
    ]



    return (
        <div className='w-full h-[90.5vh]   
                        flex flex-row 
                     '>
            {/* side bar section  */}
            <div className='h-full w-20 hidden md:flex  gap-5 items-center p-2 flex-col ' >
                <House className={`h-10 w-10 p-2 rounded-md cursor-pointer ${dark ? "text-white  hover:bg-[#191919] " : "text-[#242424] hover:bg-gray-300"}`} />
                <Clapperboard className={`h-10 w-10 p-2 rounded-md cursor-pointer ${dark ? "text-white  hover:bg-[#191919] " : "text-[#242424] hover:bg-gray-300"}`} />
                <TvMinimalPlay className={`h-10 w-10 p-2 rounded-md cursor-pointer ${dark ? "text-white  hover:bg-[#191919] " : "text-[#242424] hover:bg-gray-300"}`} />
                <CircleUserRound className={`h-10 w-10 p-2 rounded-md cursor-pointer ${dark ? "text-white  hover:bg-[#191919] " : "text-[#242424] hover:bg-gray-300"}`} />

            </div>

            {/* video section */}
            <div className='h-full w-full' >

                <div className={`  z-10   w-full h-14 flex flex-row gap-3 
                       overflow-x-scroll 
                       whitespace-nowrap flex-nowrap
                       px-5 no-scrollbar items-center
                       backdrop-blur-md duration-500
                  ${dark ? "bg-[#242424]  text-white" : "bg-white text-[#2424242]"}  `}>

                    {
                        filterTag.map((tag, i) => (

                            <div key={i}
                                className={`p-2 px-3 whitespace-nowrap rounded-lg w-fit   text-sm uppercase   ${dark ? "bg-[#181818]  text-white" : "bg-gray-200 text-[#2424242]"}  duration-500`}
                            >
                                {tag}
                            </div>

                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default VideoSection
