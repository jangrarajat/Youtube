import { Bell, Home, Menu, Mic, Plus, Search, History, ListVideo, Youtube, Settings, MessageCircleQuestionMark, MessageSquareWarning, Palette, YoutubeIcon, SquarePen, Radio, X, ArrowLeft } from 'lucide-react'
import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
function Navbar() {
  const [textColor, setTextColor] = useState("white")
  const [menu, setMenu] = useState(true)
  const [searchValue, setSearchValue] = useState("")
  const [searchHistory, setSearchHistory] = useState(false)
  const [phoneSearchBar, setPhoneSearchBar] = useState(false)
  const [createOption, setCreateOption] = useState(false)
  const { dark, changeTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (dark) { setTextColor("white") }
    if (!dark) { setTextColor("#242424") }
  }, [dark])

  const menuList = [
    { icon: <Home />, name: "Home" },
    { icon: <History />, name: "History" },
    { icon: <ListVideo />, name: "Playlist" },
    { icon: <Youtube />, name: "Your videos" },
    { icon: <Settings />, name: "Settings" },
    { icon: <MessageCircleQuestionMark />, name: "Help" },
    { icon: <MessageSquareWarning />, name: "Send feedback" },
    { icon: <Palette />, name: `Theme mode`, function: changeTheme },

  ]

  const searchHistoryData = [
    "Lofi hip hop radio - beats to relax/study",
    "JavaScript Tutorial for Beginners 2026",
    "How to make butter chicken at home",
    "iPhone 17 Pro Max unboxing and review",
    "Best travel destinations in India 2026",
    "React vs Next.js: Which one to choose?",
    "Funny cat videos compilation",
    "Top 10 stocks to buy right now",
   
 "Lofi hip hop radio - beats to relax/study",
    "JavaScript Tutorial for Beginners 2026",
    "How to make butter chicken at home",
    "iPhone 17 Pro Max unboxing and review",
    "Best travel destinations in India 2026",
    "React vs Next.js: Which one to choose?",
    "Funny cat videos compilation",
    "Top 10 stocks to buy right now", "Lofi hip hop radio - beats to relax/study",
    "JavaScript Tutorial for Beginners 2026",
    "How to make butter chicken at home",
    "iPhone 17 Pro Max unboxing and review",
    "Best travel destinations in India 2026",
    "React vs Next.js: Which one to choose?",
    "Funny cat videos compilation",
    "Top 10 stocks to buy right now", "Lofi hip hop radio - beats to relax/study",
    "JavaScript Tutorial for Beginners 2026",
    "How to make butter chicken at home",
    "iPhone 17 Pro Max unboxing and review",
    "Best travel destinations in India 2026",
    "React vs Next.js: Which one to choose?",
    "Funny cat videos compilation",
    "Top 10 stocks to buy right now", "Lofi hip hop radio - beats to relax/study",
    "JavaScript Tutorial for Beginners 2026",
    "How to make butter chicken at home",
    "iPhone 17 Pro Max unboxing and review",
    "Best travel destinations in India 2026",
    "React vs Next.js: Which one to choose?",
    "Funny cat videos compilation",
    "Top 10 stocks to buy right now",
  ]

  return (
    <>
      <div
        className={`w-full h-14 flex items-center justify-between px-3  backdrop-blur-md duration-500
                  ${dark ? "bg-[#242424] text-white" : "bg-white text-[#2424242]"}  `}>
        {/* logo  */}
        <div className=' flex gap-2 items-center '>
          <Menu
            onClick={() => setMenu(!menu)}
            size={40}
            className={`${dark ? "text-white active:bg-[#191919]" : "text-[#242424]"}  rounded-full p-2 cursor-pointer duration-500`} />


          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="20"
            viewBox="0 0 101 20"
            focusable="false"
            aria-hidden="true"
          >
            <g>

              <path
                d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z"
                fill="#FF0033"
              />

              <path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white" />
            </g>


            <g fill={textColor}>
              <path d="M37.1384 18.8999V13.4399L40.6084 2.09994H38.0184L36.6984 7.24994C36.3984 8.42994 36.1284 9.65994 35.9284 10.7999H35.7684C35.6584 9.79994 35.3384 8.48994 35.0184 7.22994L33.7384 2.09994H31.1484L34.5684 13.4399V18.8999H37.1384Z"></path>
              <path d="M44.1003 6.29994C41.0703 6.29994 40.0303 8.04994 40.0303 11.8199V13.6099C40.0303 16.9899 40.6803 19.1099 44.0403 19.1099C47.3503 19.1099 48.0603 17.0899 48.0603 13.6099V11.8199C48.0603 8.44994 47.3803 6.29994 44.1003 6.29994ZM45.3903 14.7199C45.3903 16.3599 45.1003 17.3899 44.0503 17.3899C43.0203 17.3899 42.7303 16.3499 42.7303 14.7199V10.6799C42.7303 9.27994 42.9303 8.02994 44.0503 8.02994C45.2303 8.02994 45.3903 9.34994 45.3903 10.6799V14.7199Z"></path>
              < path d="M52.2713 19.0899C53.7313 19.0899 54.6413 18.4799 55.3913 17.3799H55.5013L55.6113 18.8999H57.6012V6.53994H54.9613V16.4699C54.6812 16.9599 54.0312 17.3199 53.4212 17.3199C52.6512 17.3199 52.4113 16.7099 52.4113 15.6899V6.53994H49.7812V15.8099C49.7812 17.8199 50.3613 19.0899 52.2713 19.0899Z" ></path >
              <path d="M62.8261 18.8999V4.14994H65.8661V2.09994H57.1761V4.14994H60.2161V18.8999H62.8261Z"></path>
              <path d="M67.8728 19.0899C69.3328 19.0899 70.2428 18.4799 70.9928 17.3799H71.1028L71.2128 18.8999H73.2028V6.53994H70.5628V16.4699C70.2828 16.9599 69.6328 17.3199 69.0228 17.3199C68.2528 17.3199 68.0128 16.7099 68.0128 15.6899V6.53994H65.3828V15.8099C65.3828 17.8199 65.9628 19.0899 67.8728 19.0899Z"></path>
              <path d="M80.6744 6.26994C79.3944 6.26994 78.4744 6.82994 77.8644 7.73994H77.7344C77.8144 6.53994 77.8744 5.51994 77.8744 4.70994V1.43994H75.3244L75.3144 12.1799L75.3244 18.8999H77.5444L77.7344 17.6999H77.8044C78.3944 18.5099 79.3044 19.0199 80.5144 19.0199C82.5244 19.0199 83.3844 17.2899 83.3844 13.6099V11.6999C83.3844 8.25994 82.9944 6.26994 80.6744 6.26994ZM80.7644 13.6099C80.7644 15.9099 80.4244 17.2799 79.3544 17.2799C78.8544 17.2799 78.1644 17.0399 77.8544 16.5899V9.23994C78.1244 8.53994 78.7244 8.02994 79.3944 8.02994C80.4744 8.02994 80.7644 9.33994 80.7644 11.7299V13.6099Z"></path>
              <path d="M92.6517 11.4999C92.6517 8.51994 92.3517 6.30994 88.9217 6.30994C85.6917 6.30994 84.9717 8.45994 84.9717 11.6199V13.7899C84.9717 16.8699 85.6317 19.1099 88.8417 19.1099C91.3817 19.1099 92.6917 17.8399 92.5417 15.3799L90.2917 15.2599C90.2617 16.7799 89.9117 17.3999 88.9017 17.3999C87.6317 17.3999 87.5717 16.1899 87.5717 14.3899V13.5499H92.6517V11.4999ZM88.8617 7.96994C90.0817 7.96994 90.1717 9.11994 90.1717 11.0699V12.0799H87.5717V11.0699C87.5717 9.13994 87.6517 7.96994 88.8617 7.96994Z"></path>
            </g>
          </svg>

        </div>


        {/* serch bar */}
        <div className=' hidden md:flex gap-5'>
          <div
            onClick={() => setSearchHistory(!searchHistory)}
            className='  borger flex gap-2 justify-between  border border-gray-600 items-center pl-3 rounded-full cursor-pointer '>
            <input
              type="text"
              name=""
              id=""
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Search'
              className={` rounded-full rounded-r-none ${dark ? "bg-[#242424] text-white " : "bg-white text-[#242424] "}  a  w-[70vh] focus:outline-none focus:duration-0   px-2 p-1  duration-500 overflow-auto`} />
            <Search
              onClick={() => setSearchHistory(!searchHistory)}
              className={`  p-2 rounded-r-full ${dark ? "bg-[#191919] " : "bg-white "} duration-500 `} size={40} />
            {/* search history */}

            <div
              className={`min-h-28 h-fit max-h-80  w-[75vh] overflow-y-scroll scrollbar-hide-track   bg-[#191919] p-1 py-2    absolute     mx-auto   top-14  rounded-lg
              ${dark ? "md:bg-[#181818] " : "bg-white "}
             ${searchHistory ? "flex" : "hidden"} flex-col duration-500`}
            >
              {
                searchHistoryData.map((data, i) => (

                  <div key={i}
                    onClick={() => setSearchValue(data)}
                    className={` flex items-center gap-3 p-2 py-2   
                      ${dark ? " hover:bg-[#242424] " : "hover:bg-gray-200"} rounded-lg
                      `}
                  ><History /> <span className='w-full overflow-hidden'>{data}</span><X /></div>

                ))
              }

            </div>

          </div>
          <div>
            <Mic
              className={`  rounded-full  p-2 
             ${dark ? "bg-[#191919] text-white" : "bg-white text-[#2424242]"} duration-500 cursor-pointer `} size={40} />
          </div>
        </div>
        {/* phone mode */}
        <div className=' flex gap-4  items-center  '>





          <div className=' flex md:hidden  '>
            <Search
              onClick={() => setSearchHistory(!searchHistory)}
              className={` cursor-pointer  p-2 rounded-full ${dark ? "md:bg-[#191919] " : "bg-white "} duration-500 `} size={40} />
            {/* phone search history */}
            <div
              className={`min-h-28 h-fit max-h-[100vh] w-full   overflow-auto  scrollbar-hide-track bg-[#191919] p-1 py-2    absolute   left-0      top-14  
              ${dark ? "md:bg-[#181818] " : "bg-white "}
             ${searchHistory ? "flex duration-500" : "hidden duration-500"} flex-col duration-500`}
            >

              {
                !phoneSearchBar ? (
                  <>
                    <div className={` fixed top-2 w-full flex justify-center items-center  px-5
                  ${dark ? "bg-[#242424] text-white " : "bg-white text-[#242424] "} 
                  `}>
                      <ArrowLeft onClick={() => setSearchHistory(!searchHistory)} />
                      <div

                        className={`  borger flex md:hidden gap-2 justify-between  mx-auto top-2  border border-gray-600 items-center pl-3 rounded-full cursor-pointer
                     ${dark ? "bg-[#242424] text-white " : "bg-white text-[#242424] "} 
                    `}>


                        <input
                          type="text"
                          name=""
                          id=""
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                          placeholder='Search'
                          className={` rounded-full rounded-r-none ${dark ? "bg-[#242424] text-white " : "bg-white text-[#242424] "}     w-full focus:outline-none focus:duration-0   px-2 p-1  duration-500 overflow-auto`} />
                        <Search className={`  p-2 rounded-r-full ${dark ? "bg-[#191919] " : "bg-white "} duration-500 `} size={40} />



                      </div>
                    </div>
                  </>
                ) : null
              }


              {

                searchHistoryData.map((data, i) => (

                  <div key={i}
                    onClick={() => setSearchValue(data)}
                    className={` cursor-pointer flex items-center gap-3 p-2 py-2   
                      ${dark ? " hover:bg-[#242424] " : "hover:bg-gray-200"} rounded-lg
                      `}
                  ><History /> <span onClick={() => setSearchHistory(!searchHistory)} className='w-full overflow-hidden'>{data}</span><X /></div>

                ))
              }

            </div>
          </div>
          <div
            onClick={() => setCreateOption(!createOption)}
            className=' flex md:hidden '>
            <Plus className={`  p-2 rounded-full ${dark ? "md:bg-[#191919] " : "bg-white "} duration-500 `} size={40} />
            <div
              className={`h-fit w-36 bg-[#191919] p-1 py-2    absolute  top-14  right-16 rounded-lg
              ${dark ? "md:bg-[#181818] " : "bg-white "}
             ${createOption ? "flex" : "hidden"} flex-col duration-500`}>
              <div
                className={` flex p-2 gap-3 cursor-pointer   text-sm items-center ${dark ? " hover:bg-[#242424] " : "hover:bg-gray-200"} rounded-lg`}
              >
                <YoutubeIcon /> Upload video
              </div>
              <div
                className={` flex p-2 gap-3 cursor-pointer   text-sm items-center ${dark ? " hover:bg-[#242424] " : "hover:bg-gray-200"} rounded-lg`}
              >
                <Radio /> Go live
              </div>
              <div
                className={` flex p-2 gap-3 cursor-pointer  text-sm items-center ${dark ? " hover:bg-[#242424] " : "hover:bg-gray-200"} rounded-lg`}
              >
                <SquarePen /> Create post
              </div>
            </div>
          </div>
          <div
            onClick={() => setCreateOption(!createOption)}
            className={` cursor-pointer hidden md:flex items-center gap-2 rounded-full px-3  p-2 ${dark ? "bg-[#191919] " : "bg-white "} duration-500 cursor-pointer `}>
            <Plus /> Create

            <div
              className={`h-fit w-36 bg-[#191919] p-1 py-2    absolute  top-14  right-16 rounded-lg
              ${dark ? "md:bg-[#181818] " : "bg-white "}
             ${createOption ? "flex" : "hidden"} flex-col duration-500`}>
              <div
                className={` flex p-2 gap-3 cursor-pointer   text-sm items-center ${dark ? " hover:bg-[#242424] " : "hover:bg-gray-200"} rounded-lg`}
              >
                <YoutubeIcon /> Upload video
              </div>
              <div
                className={` flex p-2 gap-3 cursor-pointer   text-sm items-center ${dark ? " hover:bg-[#242424] " : "hover:bg-gray-200"} rounded-lg`}
              >
                <Radio /> Go live
              </div>
              <div
                className={` flex p-2 gap-3 cursor-pointer  text-sm items-center ${dark ? " hover:bg-[#242424] " : "hover:bg-gray-200"} rounded-lg`}
              >
                <SquarePen /> Create post
              </div>
            </div>
          </div>
          <div className={` cursor-pointer p-2 rounded-full ${dark ? "hover:bg-[#181818] " : null} duration-500 cursor-pointer  `}>
            <Bell />
          </div>
        </div>


      </div>













      <div className={`w-60 h-[100%] flex flex-col  p-2  z-50 fixed top-0  
         ${dark ? "bg-[#242424] text-white" : "bg-white text-[#2424242] "} duration-500
           ${menu ? "-left-60" : "left-0"} duration-200 `}
      >
        <div className=' flex gap-2 items-center '>
          <Menu
            onClick={() => setMenu(!menu)}
            size={40}
            className={`${dark ? "text-white active:bg-[#191919]" : "text-[#242424] "}  rounded-full p-2 cursor-pointer duration-500`} />


          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="20"
            viewBox="0 0 101 20"
            focusable="false"
            aria-hidden="true"
          >
            <g>

              <path
                d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z"
                fill="#FF0033"
              />

              <path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white" />
            </g>


            <g fill={textColor}>
              <path d="M37.1384 18.8999V13.4399L40.6084 2.09994H38.0184L36.6984 7.24994C36.3984 8.42994 36.1284 9.65994 35.9284 10.7999H35.7684C35.6584 9.79994 35.3384 8.48994 35.0184 7.22994L33.7384 2.09994H31.1484L34.5684 13.4399V18.8999H37.1384Z"></path>
              <path d="M44.1003 6.29994C41.0703 6.29994 40.0303 8.04994 40.0303 11.8199V13.6099C40.0303 16.9899 40.6803 19.1099 44.0403 19.1099C47.3503 19.1099 48.0603 17.0899 48.0603 13.6099V11.8199C48.0603 8.44994 47.3803 6.29994 44.1003 6.29994ZM45.3903 14.7199C45.3903 16.3599 45.1003 17.3899 44.0503 17.3899C43.0203 17.3899 42.7303 16.3499 42.7303 14.7199V10.6799C42.7303 9.27994 42.9303 8.02994 44.0503 8.02994C45.2303 8.02994 45.3903 9.34994 45.3903 10.6799V14.7199Z"></path>
              < path d="M52.2713 19.0899C53.7313 19.0899 54.6413 18.4799 55.3913 17.3799H55.5013L55.6113 18.8999H57.6012V6.53994H54.9613V16.4699C54.6812 16.9599 54.0312 17.3199 53.4212 17.3199C52.6512 17.3199 52.4113 16.7099 52.4113 15.6899V6.53994H49.7812V15.8099C49.7812 17.8199 50.3613 19.0899 52.2713 19.0899Z" ></path >
              <path d="M62.8261 18.8999V4.14994H65.8661V2.09994H57.1761V4.14994H60.2161V18.8999H62.8261Z"></path>
              <path d="M67.8728 19.0899C69.3328 19.0899 70.2428 18.4799 70.9928 17.3799H71.1028L71.2128 18.8999H73.2028V6.53994H70.5628V16.4699C70.2828 16.9599 69.6328 17.3199 69.0228 17.3199C68.2528 17.3199 68.0128 16.7099 68.0128 15.6899V6.53994H65.3828V15.8099C65.3828 17.8199 65.9628 19.0899 67.8728 19.0899Z"></path>
              <path d="M80.6744 6.26994C79.3944 6.26994 78.4744 6.82994 77.8644 7.73994H77.7344C77.8144 6.53994 77.8744 5.51994 77.8744 4.70994V1.43994H75.3244L75.3144 12.1799L75.3244 18.8999H77.5444L77.7344 17.6999H77.8044C78.3944 18.5099 79.3044 19.0199 80.5144 19.0199C82.5244 19.0199 83.3844 17.2899 83.3844 13.6099V11.6999C83.3844 8.25994 82.9944 6.26994 80.6744 6.26994ZM80.7644 13.6099C80.7644 15.9099 80.4244 17.2799 79.3544 17.2799C78.8544 17.2799 78.1644 17.0399 77.8544 16.5899V9.23994C78.1244 8.53994 78.7244 8.02994 79.3944 8.02994C80.4744 8.02994 80.7644 9.33994 80.7644 11.7299V13.6099Z"></path>
              <path d="M92.6517 11.4999C92.6517 8.51994 92.3517 6.30994 88.9217 6.30994C85.6917 6.30994 84.9717 8.45994 84.9717 11.6199V13.7899C84.9717 16.8699 85.6317 19.1099 88.8417 19.1099C91.3817 19.1099 92.6917 17.8399 92.5417 15.3799L90.2917 15.2599C90.2617 16.7799 89.9117 17.3999 88.9017 17.3999C87.6317 17.3999 87.5717 16.1899 87.5717 14.3899V13.5499H92.6517V11.4999ZM88.8617 7.96994C90.0817 7.96994 90.1717 9.11994 90.1717 11.0699V12.0799H87.5717V11.0699C87.5717 9.13994 87.6517 7.96994 88.8617 7.96994Z"></path>
            </g>
          </svg>

        </div>
        <div className='w-full h-full flex flex-col overflow-auto no-scrollbar '>
          {menuList.map((item, i) => (

            <div
              key={i}
              onClick={item.function}
              className={` flex p-2 gap-3 cursor-pointer ${dark ? " hover:bg-[#191919] " : "hover:bg-gray-200"} rounded-lg`} >
              <span>{item.icon}</span><span>{item.name}</span>
            </div>

          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar



