import { CircleUserRound, Clapperboard, Dot, House, TvMinimalPlay } from 'lucide-react'
import React, { useContext, useEffect, useState, useRef, useCallback } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { getYoutubeData } from '../api/videoData'
import { useSearchParams, useNavigate } from 'react-router-dom' // <-- useNavigate yahan add kiya hai

function VideoSection() {
    const { dark } = useContext(ThemeContext)
    const [videoPreview, setVideoPreview] = useState(null)
    
    // URL se search query nikalna aur navigate hook
    const [searchParams] = useSearchParams()
    const navigate = useNavigate() // <-- Naya Navigation Hook

    // Agar URL me search_query nahi hai, to default "Trending in India" search karega
    const searchQuery = searchParams.get("search_query") || "Trending in India"

    // Infinite Scroll & Data States
    const [videos, setVideos] = useState([])
    const [pageToken, setPageToken] = useState("")
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    const loaderRef = useRef(null)

    // NAYA LOGIC: Jab bhi searchQuery change ho, to purana data reset karke naya fetch karo
    useEffect(() => {
        const fetchInitialVideos = async () => {
            setLoading(true);
            try {
                const data = await getYoutubeData({ q: searchQuery, limit: 12, pageToken: "" });
                if (data && data.items) {
                    setVideos(data.items); // Naya data set kiya
                    setPageToken(data.nextPageToken || "");
                    setHasMore(!!data.nextPageToken);
                }
            } catch (error) {
                console.error("Error fetching initial videos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInitialVideos();
    }, [searchQuery]);


    // Puraana Load More logic
    const fetchMoreVideos = useCallback(async () => {
        if (loading || !hasMore || !pageToken) return;
        setLoading(true);

        try {
            const data = await getYoutubeData({ q: searchQuery, limit: 12, pageToken: pageToken });
            
            if (data && data.items) {
                setVideos((prevVideos) => [...prevVideos, ...data.items]); 
                setPageToken(data.nextPageToken || "");
                setHasMore(!!data.nextPageToken);
            }
        } catch (error) {
            console.error("Error fetching more videos:", error);
        } finally {
            setLoading(false);
        }
    }, [searchQuery, pageToken, loading, hasMore]); 

    // Intersection Observer (Infinite Scroll)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const firstEntry = entries[0];
                if (firstEntry.isIntersecting && !loading && hasMore && pageToken) {
                    fetchMoreVideos();
                }
            },
            { threshold: 0.1 }
        );

        const currentTarget = loaderRef.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [fetchMoreVideos, loading, hasMore, pageToken]);

    const filterTag = ["all", "gaming", "music", "live", "mixes", "indian music", "coding", "vlogs"]

    return (
        <div className='w-full h-[90.5vh] flex flex-row'>
            {/* side bar section */}
            <div className='h-full w-20 hidden md:flex gap-5 items-center p-2 flex-col'>
                <House className={`h-10 w-10 p-2 rounded-md cursor-pointer ${dark ? "text-white hover:bg-[#191919]" : "text-[#242424] hover:bg-gray-300"}`} />
                <Clapperboard className={`h-10 w-10 p-2 rounded-md cursor-pointer ${dark ? "text-white hover:bg-[#191919]" : "text-[#242424] hover:bg-gray-300"}`} />
                <TvMinimalPlay className={`h-10 w-10 p-2 rounded-md cursor-pointer ${dark ? "text-white hover:bg-[#191919]" : "text-[#242424] hover:bg-gray-300"}`} />
                <CircleUserRound className={`h-10 w-10 p-2 rounded-md cursor-pointer ${dark ? "text-white hover:bg-[#191919]" : "text-[#242424] hover:bg-gray-300"}`} />
            </div>

            <div className='h-full w-full'>
                {/* filter tag */}
                <div className={`z-10 md:pr-20 w-full h-14 flex flex-row gap-3 overflow-x-scroll whitespace-nowrap flex-nowrap px-5 no-scrollbar items-center backdrop-blur-md duration-500 ${dark ? "bg-[#242424] text-white" : "bg-white text-[#2424242]"}`}>
                    {filterTag.map((tag, i) => (
                        <div key={i} className={`cursor-pointer p-2 px-3 whitespace-nowrap rounded-lg w-fit text-sm uppercase ${dark ? "bg-[#181818] text-white" : "bg-gray-200 text-[#2424242]"} duration-500`}>
                            {tag}
                        </div>
                    ))}
                </div>

                {/* video section */}
                <div className='md:w-[95.6%] h-[81vh] overflow-y-scroll no-scrollbar md:p-2'>
                    <div className='w-full grid grid-flow-cols grid-cols-1 sm:grid-cols-2 sm:p-2 md:grid-cols-3 gap-2'>
                        {videos.map((v, i) => {
                            const snippet = v.snippet;
                            const videoId = v.id.videoId;

                            return (
                                <div key={videoId + i}
                                    onClick={() => navigate(`/video/${videoId}`, { state: { video: v } })} // <-- CLICK PAR PLAY PAGE PAR JAYEGA
                                    onMouseEnter={() => setVideoPreview(i)}
                                    onMouseLeave={() => setVideoPreview(null)}
                                    onTouchStart={() => setVideoPreview(i)}
                                    onTouchEnd={() => setVideoPreview(null)}
                                    className={`cursor-pointer md:rounded-xl md:p-3 flex flex-col md:gap-1 duration-500 ${dark ? "text-white md:hover:bg-[#191919]" : "text-[#242424] md:hover:bg-gray-300"}`}
                                >
                                    <div className="w-full aspect-video overflow-hidden md:rounded-xl">
                                        <img
                                            src={snippet.thumbnails.high.url}
                                            alt={snippet.title}
                                            loading="lazy"
                                            className={`w-full h-full object-cover`}
                                        />
                                    </div>

                                    <div className='flex items-center gap-3 p-2'>
                                        <div className='h-10 w-10 min-w-10 rounded-full bg-gray-500 overflow-hidden flex items-center justify-center text-white font-bold'>
                                            {snippet.channelTitle.charAt(0)}
                                        </div>
                                        <p className='overflow-hidden text-sm font-semibold line-clamp-2' dangerouslySetInnerHTML={{ __html: snippet.title }}></p>
                                    </div>
                                    
                                    <div>
                                        <p className={`pl-14 text-xs ${dark ? "text-gray-400" : "text-gray-600"}`}>
                                            {snippet.channelTitle}
                                        </p>
                                        <div className='flex gap-1 pl-14 items-center'>
                                            <p className={`text-xs ${dark ? "text-gray-400" : "text-gray-600"}`}>
                                                {new Date(snippet.publishedAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Loader */}
                    {hasMore && (
                        <div ref={loaderRef} className="w-full flex justify-center items-center py-6">
                            {loading && (
                                <div className={`animate-spin rounded-full h-8 w-8 border-b-2 ${dark ? "border-white" : "border-[#FF0000]"}`}></div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default VideoSection