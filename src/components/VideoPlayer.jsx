import React, { useContext, useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal, CheckCircle2, Music, Video, ChevronLeft } from 'lucide-react'
import { getYoutubeData } from '../api/videoData'

function VideoPlayer() {
    const { videoId } = useParams()
    const { state } = useLocation()
    const navigate = useNavigate()
    const { dark } = useContext(ThemeContext)
    
    const [relatedVideos, setRelatedVideos] = useState([])
    
    // NAYE STATES: Download Menu Handle karne ke liye
    const [isDownloadOpen, setIsDownloadOpen] = useState(false)
    const [downloadStep, setDownloadStep] = useState('initial') // 'initial', 'videoQuality'

    const snippet = state?.video?.snippet || null

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [videoId])

    useEffect(() => {
        const fetchRelated = async () => {
            const data = await getYoutubeData({ q: snippet?.channelTitle || "Trending in India", limit: 15, pageToken: "" })
            if (data && data.items) {
                setRelatedVideos(data.items)
            }
        }
        fetchRelated()
    }, [snippet])

    // NAYA FUNCTION: Real download jaisi feeling dene ke liye
    const handleActualDownload = (type, quality = "") => {
        setIsDownloadOpen(false); // Menu band karo
        setDownloadStep('initial'); // State reset karo
        
        // Asli download ki feel dene ke liye ek dummy file generate karke browser se download karwa rahe hain
        const content = `Yeh ek dummy ${type} file hai. \n\nQuality: ${quality}\nVideo ID: ${videoId}\n\nAsli video download karne ke liye Node.js backend ki zaroorat padegi.`;
        const blob = new Blob([content], { type: "text/plain" });
        const url = window.URL.createObjectURL(blob);
        
        const a = document.createElement("a");
        a.href = url;
        a.download = `${snippet ? snippet.title : "YouTube_Video"}_${quality}.${type === 'audio' ? 'mp3' : 'mp4'}`;
        document.body.appendChild(a);
        a.click();
        
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        alert(`Downloading ${type} at ${quality}... (Dummy file for UI testing)`);
    }

    return (
        <div className={`w-full h-[90.5vh] overflow-y-auto no-scrollbar flex flex-col lg:flex-row px-0 md:px-6 lg:px-10 py-4 gap-6 ${dark ? "bg-[#0f0f0f] text-white" : "bg-white text-black"}`}>
            
            {/* Left Side: Main Video Player & Details */}
            <div className="w-full lg:w-[70%] flex flex-col gap-3">
                {/* Video Player Iframe */}
                <div className="w-full aspect-video md:rounded-xl overflow-hidden bg-black shadow-lg">
                    <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                </div>

                <h1 className="text-xl font-bold mt-2 px-3 md:px-0" dangerouslySetInnerHTML={{ __html: snippet ? snippet.title : "Loading Title..." }}></h1>

                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 px-3 md:px-0">
                    
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 min-w-10 rounded-full bg-blue-600 overflow-hidden flex items-center justify-center text-white font-bold text-lg">
                            {snippet ? snippet.channelTitle.charAt(0).toUpperCase() : "C"}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1 font-bold whitespace-nowrap">
                                {snippet ? snippet.channelTitle : "Channel Name"}
                                <CheckCircle2 size={14} className="text-gray-400 fill-gray-800" />
                            </div>
                            <span className="text-xs text-gray-500">36.3M subscribers</span>
                        </div>
                        <button className={`ml-2 px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap ${dark ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`}>
                            Subscribe
                        </button>
                    </div>

                    <div className="flex items-center gap-2 overflow-visible pb-2 xl:pb-0 relative">
                        <div className={`flex items-center rounded-full cursor-pointer ${dark ? "bg-[#272727] hover:bg-[#3f3f3f]" : "bg-gray-100 hover:bg-gray-200"}`}>
                            <div className="flex items-center gap-2 px-4 py-2 border-r border-gray-500/30 hover:bg-gray-500/20 rounded-l-full">
                                <ThumbsUp size={20} /> <span className="font-semibold text-sm">8K</span>
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-500/20 rounded-r-full">
                                <ThumbsDown size={20} />
                            </div>
                        </div>
                        
                        <div className={`flex items-center gap-2 rounded-full px-4 py-2 cursor-pointer whitespace-nowrap ${dark ? "bg-[#272727] hover:bg-[#3f3f3f]" : "bg-gray-100 hover:bg-gray-200"}`}>
                            <Share size={20} /> <span className="font-semibold text-sm">Share</span>
                        </div>
                        
                        {/* ---------- DOWNLOAD BUTTON W/ DROPDOWN LOGIC ---------- */}
                        <div className="relative">
                            <div 
                                onClick={() => {
                                    setIsDownloadOpen(!isDownloadOpen);
                                    setDownloadStep('initial');
                                }} 
                                className={`flex items-center gap-2 rounded-full px-4 py-2 cursor-pointer whitespace-nowrap ${dark ? "bg-[#272727] hover:bg-[#3f3f3f]" : "bg-gray-100 hover:bg-gray-200"}`}
                            >
                                <Download size={20} /> <span className="font-semibold text-sm">Download</span>
                            </div>

                            {/* Download Dropdown Menu */}
                            {isDownloadOpen && (
                                <div className={`absolute top-full mt-2 right-0 w-48 rounded-xl shadow-2xl z-50 overflow-hidden border ${dark ? "bg-[#272727] border-gray-600" : "bg-white border-gray-200"}`}>
                                    
                                    {/* Step 1: Initial Options (Audio or Video) */}
                                    {downloadStep === 'initial' && (
                                        <div className="flex flex-col py-2">
                                            <div 
                                                onClick={() => handleActualDownload('audio', 'High Quality')}
                                                className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${dark ? "hover:bg-[#3f3f3f]" : "hover:bg-gray-100"}`}
                                            >
                                                <Music size={18} />
                                                <span className="text-sm font-semibold">Download Audio</span>
                                            </div>
                                            <div 
                                                onClick={() => setDownloadStep('videoQuality')}
                                                className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${dark ? "hover:bg-[#3f3f3f]" : "hover:bg-gray-100"}`}
                                            >
                                                <Video size={18} />
                                                <span className="text-sm font-semibold">Download Video</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 2: Video Quality Options */}
                                    {downloadStep === 'videoQuality' && (
                                        <div className="flex flex-col py-2">
                                            {/* Back Button */}
                                            <div 
                                                onClick={() => setDownloadStep('initial')}
                                                className={`flex items-center gap-2 px-4 py-2 pb-3 mb-1 border-b cursor-pointer ${dark ? "border-gray-600 hover:bg-[#3f3f3f]" : "border-gray-200 hover:bg-gray-100"}`}
                                            >
                                                <ChevronLeft size={18} />
                                                <span className="text-sm font-bold">Select Quality</span>
                                            </div>
                                            
                                            {/* Qualities */}
                                            {['1080p (HD)', '720p', '480p', '360p'].map((quality, index) => (
                                                <div 
                                                    key={index}
                                                    onClick={() => handleActualDownload('video', quality)}
                                                    className={`flex items-center px-8 py-2 cursor-pointer ${dark ? "hover:bg-[#3f3f3f]" : "hover:bg-gray-100"}`}
                                                >
                                                    <span className="text-sm">{quality}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        {/* ------------------------------------------------------ */}

                        <div className={`flex items-center rounded-full p-2 cursor-pointer ${dark ? "bg-[#272727] hover:bg-[#3f3f3f]" : "bg-gray-100 hover:bg-gray-200"}`}>
                            <MoreHorizontal size={20} />
                        </div>
                    </div>
                </div>

                {/* Description Box */}
                <div className={`mt-2 mx-3 md:mx-0 p-3 rounded-xl text-sm cursor-pointer ${dark ? "bg-[#272727] hover:bg-[#3f3f3f]" : "bg-gray-100 hover:bg-gray-200"}`}>
                    <div className="font-semibold flex gap-2">
                        <span>1.3M views</span>
                        <span>{snippet ? new Date(snippet.publishedAt).toLocaleDateString() : "2 days ago"}</span>
                        <span className="text-blue-500 font-normal">#{snippet ? snippet.channelTitle.replace(/\s+/g, '') : "trending"} #viral</span>
                    </div>
                    <p className="mt-1 line-clamp-2">{snippet ? snippet.description : "No description available."}</p>
                    <span className="font-bold mt-1 block">...more</span>
                </div>

                <div className="mt-6 px-3 md:px-0">
                    <h2 className="text-xl font-bold mb-4">1,402 Comments</h2>
                    <div className="flex gap-4 items-start">
                        <div className="h-10 w-10 min-w-10 rounded-full bg-pink-600 flex-shrink-0 flex items-center justify-center text-white font-bold">U</div>
                        <div className="w-full">
                            <input 
                                type="text" 
                                placeholder="Add a comment..." 
                                className={`w-full border-b pb-1 bg-transparent focus:outline-none focus:border-b-2 transition-all ${dark ? "border-gray-600 focus:border-white text-white" : "border-gray-300 focus:border-black text-black"}`} 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Related Videos */}
            <div className="w-full lg:w-[30%] flex flex-col gap-3 px-3 md:px-0 mt-6 lg:mt-0">
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                    {["All", "From your search", "Related", "Recently uploaded"].map((tag, i) => (
                        <span key={i} className={`whitespace-nowrap px-3 py-1 rounded-lg text-sm cursor-pointer transition-colors ${i === 0 ? (dark ? "bg-white text-black font-semibold" : "bg-black text-white font-semibold") : (dark ? "bg-[#272727] hover:bg-[#3f3f3f]" : "bg-gray-100 hover:bg-gray-200")}`}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col gap-3 mt-2">
                    {relatedVideos.map((v, i) => {
                        const relSnippet = v.snippet;
                        const relVideoId = v.id.videoId;
                        if(!relVideoId) return null; 
                        
                        return (
                            <div 
                                key={relVideoId + i} 
                                onClick={() => navigate(`/video/${relVideoId}`, { state: { video: v } })}
                                className="flex gap-2 cursor-pointer group"
                            >
                                <div className="w-[160px] h-[90px] flex-shrink-0 rounded-lg overflow-hidden relative">
                                    <img src={relSnippet.thumbnails.medium.url} alt="thumbnail" className="w-full h-full object-cover group-hover:scale-105 duration-200" />
                                </div>
                                <div className="flex flex-col">
                                    <p className={`text-sm font-semibold line-clamp-2 leading-tight ${dark ? "text-white" : "text-black"}`} dangerouslySetInnerHTML={{ __html: relSnippet.title }}></p>
                                    <p className={`text-xs mt-1 ${dark ? "text-gray-400" : "text-gray-600"}`}>{relSnippet.channelTitle}</p>
                                    <p className={`text-xs ${dark ? "text-gray-400" : "text-gray-600"}`}>
                                        {new Date(relSnippet.publishedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default VideoPlayer