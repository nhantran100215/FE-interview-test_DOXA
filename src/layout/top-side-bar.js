import iconSubreddit from "assets/svg/icon-subreddit.svg";
import iconRedditText from "assets/svg/reddit-text.svg";
import logoRGift from "assets/svg/logo-rgift.svg";
import imgIconSubreddit from "assets/img/icon-subreddit.png";
// import imgBgHeader from "assets/img/bg_img_header.jpg"
import imgHeader from "assets/img/bg-header.png";

const TopSideBar = () => {
  return (
    <div className="w-full">
      {/* top side bar */}
      <div className="flex w-full h-12 items-center justify-between bg-white border-b-[1px] border-gray-300 fixed">
        {/* icon */}
        <a href="https://www.reddit.com/" className="flex items-center">
          <img
            src={iconSubreddit}
            alt="icon-subreddit"
            className="h-8 w-8 my-2 mr-2 ml-4"
          />
          <img
            src={iconRedditText}
            alt="iconRedditText"
            className="mr-5 h-[18px] w-auto hidden lg:inline-block"
          />
        </a>
        {/* search */}
        <div className="flex items-center bg-gray-100 border-2 rounded pr-3 text-gray-400 max-w-[650px]  h-auto overflow-hidden w-3/4 sm:w-1/2 xl:w-3/4">
          <i className="las la-search text-2xl"></i>
          <div className="flex justify-center items-center bg-gray-300 px-2 rounded-xl">
            <img
              alt="Subreddit icon"
              src={imgIconSubreddit}
              className="text-xs w-4 h-4"
            />
            <span className="text-sm text-black">r/gifs</span>
          </div>
          <input
            type="text"
            placeholder="Search Reddit"
            className="focus:outline-none p-1 bg-gray-100 w-11/12 text-sm"
          />
        </div>
        <div className="flex justify-center items-center">
          {/* icon notice */}
          <div className="flex justify-center items-center  lg:w-10 lg:h-10 bg-gray-200 rounded-full text-gray-500 ml-6">
            <i className="las la-bullhorn text-2xl hidden sm:inline-block"></i>
          </div>

          {/* login */}
          <div className="hidden sm:inline-block whitespace-nowrap">
            <button className=" h-8 mx-2 border-[1px] border-blue-600 font-bold  text text-blue-600 rounded-2xl text-sm hover:bg-slate-100 sm:w-16 lg:w-24 xl:w-28">
              Log In
            </button>
            <button className="h-8 mx-2 border-[1px] bg-blue-600 hover:bg-blue-500 font-bold text text-white rounded-2xl text-sm sm:w-16 lg:w-24 xl:w-28 ">
              Sign Up
            </button>
          </div>
          {/* function bar */}
          <div className="flex items-center mr-3 border-[1px] border-transparent hover:border-gray-200 px-2">
            <i className="las la-user text-2xl text-gray-400"></i>
            <i className="las la-angle-down text-sm text-gray-400"></i>
          </div>
        </div>
      </div>
      {/* take up póiiton for topsidebar */}
      {/* bg header */}
      <div className="bg-[url('./assets/img/bg_img_header.jpg')] w-full h-80 bg-gray-600 bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <img src={imgHeader} alt="logo header" />
      </div>
      
    </div>
  );
};
export default TopSideBar;
