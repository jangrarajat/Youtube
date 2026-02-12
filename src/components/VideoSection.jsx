import { CircleUserRound, Clapperboard, Dot, House, TvMinimalPlay } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { videoData } from '../api/videoData'

function VideoSection() {
    const { dark } = useContext(ThemeContext)
    const [videoPreview, setVideoPreview] = useState(3)

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


            <div className='h-full w-full' >
                {/* filtr tag */}
                <div className={`  z-10  md:pr-20 w-full h-14 flex flex-row gap-3 
                       overflow-x-scroll 
                       whitespace-nowrap flex-nowrap
                       px-5 no-scrollbar items-center
                       backdrop-blur-md duration-500
                  ${dark ? "bg-[#242424]  text-white" : "bg-white text-[#2424242]"}  `}>

                    {
                        filterTag.map((tag, i) => (

                            <div key={i}
                                className={` cursor-pointer p-2 px-3 whitespace-nowrap rounded-lg w-fit   text-sm uppercase   ${dark ? "bg-[#181818]  text-white" : "bg-gray-200 text-[#2424242]"}  duration-500`}
                            >
                                {tag}
                            </div>

                        ))
                    }
                </div>



                {/* video section */}
                <div className='md:w-[95.6%] h-[81vh]     '>
                    <div className='w-full h-full 
                     grid grid-flow-cols grid-cols-1 sm:grid-cols-2 sm:p-2 md:grid-cols-3
                       overflow-y-scroll no-scrollbar
                     gap-2 md:p-2 '>
                        {
                            videoData.map((v, i) => (
                                <div key={i}
                                    onMouseEnter={() => setVideoPreview(i)}
                                    onMouseLeave={() => setVideoPreview(null)}
                                    onTouchStart={() => setVideoPreview(i)}
                                    onTouchEnd={() => setVideoPreview(null)}

                                    className={`    cursor-pointer  md:rounded-xl md:p-3 flex flex-col md:gap-1 duration-500
                                 ${dark ? "text-white  md:hover:bg-[#191919] " : "text-[#242424] md:hover:bg-gray-300"}
                                `}>
                                    <div className="w-full aspect-video overflow-hidden md:rounded-xl">
                                        {videoPreview === i ? (
                                            <>
                                                <video
                                                    src={v.videoUrl}
                                                    muted
                                                    autoPlay
                                                    loop
                                                    playsInline
                                                    className="w-full h-full object-cover"
                                                />
                                            </>
                                        ) : (
                                            <img
                                                src={v.thumbnail}
                                                alt="thumbnail"
                                                className="w-full h-full object-cover"
                                            />

                                        )}
                                    </div>

                                    <div className=' flex items-center gap-3 p-2 ' >
                                        <div className='h-10 w-10 rounded-full bg-gray-300 overflow-hidden'>
                                            <img src={v.channelAvatar} alt="" />
                                        </div>
                                        <p className=' overflow-hidden'>{v.title}</p>

                                    </div>
                                    <div>
                                        <p className={`pl-12  text-sm
                                            ${dark ? "text-gray-300   " : "text-[#242424] "}
                                            `}>{v.channelName}</p>
                                        <div className=' flex  gap-1'>
                                            <p className={`pl-12  text-sm
                                            ${dark ? "text-gray-300  " : "text-[#242424] "}
                                            `}>{v.views} </p>
                                            <Dot />
                                            <p className={`  text-sm
                                            ${dark ? "text-gray-300   " : "text-[#242424] "}
                                            `}>{v.uploadTime}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VideoSection
