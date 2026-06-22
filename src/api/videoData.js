import axios from "axios"


export const getYoutubeData = async ({ 
  q, 
  limit = 10, 
  pageToken = "", 
  order = "relevance",    
  videoDuration = "medium",  
  regionCode = "IN",      
  channelId = ""          
}) => {
  try {
   
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&type=video&maxResults=${limit}&order=${order}&videoDuration=${videoDuration}&regionCode=${regionCode}&key=${import.meta.env.VITE_KEY}`;
    
    if (pageToken) url += `&pageToken=${pageToken}`;
    if (channelId) url += `&channelId=${channelId}`; 

    const response = await axios.get(url);
    return response.data; 

  } catch (error) {
    console.error("YouTube API Fetch Error: ", error);
    return null;
  }
};



