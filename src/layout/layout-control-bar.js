import logoRGift from "assets/svg/logo-rgift.svg";
import classNames from "classnames"
import { useAuth } from "global";
import { Link } from "react-router-dom";


// <i className="lab la-hotjar"></i> hot <i className="las la-burn"></i>   
// <i className="las la-radiation-alt"></i> new
// {/* <i className="las la-radiation-alt"></i> top  */}

const LayoutControlBar=({children})=>{
  const {set_position_fixedBar,fixedBar,set_sortOf,controlBar} =useAuth()
    return (
      <div className="flex flex-col justify-center mt-5 w-full">
      
        {/* title header */}
        <div className="w-full mx-5 lg:mx-0">
          <div className="relative flex items-center justify-start -translate-y-8">
            <img
              src={logoRGift}
              alt="iconRedditText"
              className="mr-5 h-[72px] w-[72px] border-4 rounded-full border-white bg-white z-[50]"
            />
            <span className="text-2xl font-bold overflow-hidden leading-8 text-ellipsis">
              .gifs - funny, animated gifs for your viewing pleasure
            </span>
            <button className="px-8 py-1 ml-5 bg-indigo-500 rounded-2xl font-bold text-white hover:bg-indigo-400">
              join
            </button>
          </div>
          {/*  */}
          <div className="w-[72px] py-1 mr-5 mb-5 border-b-2 text-sm font-medium border-indigo-500 flex justify-center items-center">
            Posts
          </div>
        </div>
        {/*  */}
        <div className="w-full flex justify-centerborder-b-[1px] bg-white">
        <div className="mx-0 w-full sm:mx-5 lg:m-0 lg:mr-5 lg:w-[70%] ">
        {/* topbar */}
          <div className={classNames("flex justify-between text-gray-500 border-[1px] w-full bg-white p-2 rounded mb-5",!controlBar&&"hidden")}>
            <div className="flex text-lg items-center font-semibold">
            <div className="hover:bg-gray-200 px-1 rounded-2xl mx-1 cursor-pointer" onClick={()=>set_sortOf("hot")}>
              <i className="lab la-hotjar mr-2"></i>
              <span>Hot</span>
            </div>
            <div className="hover:bg-gray-200 px-1 rounded-2xl mx-1 cursor-pointer" onClick={()=>set_sortOf("new")}>
              <i class="lab la-hacker-news-square"></i>
              <span>New</span>
            </div>
            <div className="hover:bg-gray-200 px-1 rounded-2xl mx-1 cursor-pointer" onClick={()=>set_sortOf("top")}>
              <i class="las la-level-up-alt"></i>
              <span>Top</span>
            </div>
            <div className="hover:bg-gray-200 px-1 rounded-2xl mx-1 cursor-pointer" onClick={()=>set_sortOf("rising")}>
            <i class="las la-sort-amount-up-alt"></i>
              <span>Rising</span>
            </div>
            </div>

            <div className="text-4xl font-semibold flex justify-center items-center hover:bg-gray-200 px-1 rounded-2xl mx-1 relative cursor-pointer">
            <i className="las la-credit-card"></i>
            <i className="las la-angle-down text-sm"></i>
            <div>

            </div>
            </div>
          </div>
        {/* body */}
          {children}
        </div>
        {/* side right bar */}
        <div className="w-[30%] min-w-[300px] hidden lg:inline-block">
          <div className="w-full border border-gray-500 rounded bg-white mb-5">
            <div className="bg-indigo-400 rounded-t p-2 font-semibold text-white">About Community</div>

            <div  className="p-2">
            <div className="pb-2">Funny, animated GIFs: Your favorite computer file type! Officially pronounced with a hard "J"</div>
            <div className="flex justify-between border-b pb-4">
              <div className="">
                <p className="font-medium">21.5m</p>
                <p className="text-[10px] font-medium">Members</p>
              </div>
              <div>
                <p className="font-medium">5.7k</p>
                <p className="text-[10px] font-medium">Online</p>
              </div>
              <div></div>
            </div>

            <div className="my-4">
                <div className="mb-4">
                <i className="las la-tag "></i>
                <span className="m-3 text-base font-medium">r/gifs topics</span>
                </div>
                <div className="text-sm p-1 bg-indigo-400 inline-block rounded-2xl text-white hover:opacity-90 cursor-pointer">Internet Culture and Memes</div>
            </div>
            </div>
          </div>

          <div className="w-full border border-gray-500 rounded bg-white mb-5" id="getpositionfixedbar" ref={ref=>set_position_fixedBar(ref)}>
            <div className="bg-indigo-400 rounded-t p-2 font-semibold text-white">Filter by flair</div>
            <div className="p-2 "><span className="hover:bg-gray-200 p-1 rounded-xl cursor-pointer">Approved</span></div>
          </div>

          <div className={classNames(" border border-gray-500 rounded bg-white mb-5 p-2 w-[300px]",fixedBar&&"fixed top-[50px]")}>
            <div className="flex text-[13px]">
              <div className="w-1/2">
                <p>Help</p>
                <p>Reddit Coins</p>
                <p>Reddit Premium</p>
              </div>
              <div className="w-1/2">
                <p>About</p>
                <p>Careers</p>
                <p>Press</p>
                <p>Advertise</p>
                <p>Blog</p>
                <p>Terms</p>
                <p>Content Policy</p>
                <p>Privacy policy</p>
                <p>Mod Policy</p>
              </div>
            </div>

            <div className="mt-6 text-[13px]">Inc © 2022. All rights reserved</div>
          </div>
        </div>
        </div>
      </div>
    );
}
export default LayoutControlBar;