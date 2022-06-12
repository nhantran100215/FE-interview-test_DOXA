import { useState } from "react";
import classNames from "classnames"
import { useNavigate } from "react-router-dom";


const PostJSX = ({ data, listPostRef, index,autoPlay }) => {
    const [hover, set_hover] = useState(false);
    const navigation=useNavigate();
    const convertUnixToDate = (unixTime) => {
      let date = Math.floor((new Date().getTime() - unixTime) / 1000 / 60);
      if (date < 60)
        return date.toString().concat(date < 2 ? " minute ago" : " minutes ago");
      else {
        date = Math.floor(date / 60);
        if (date < 24)
          return date.toString().concat(date < 2 ? " hour ago" : " hours ago");
        else {
          date = Math.floor(date / 24);
          if (date < 7)
            return date.toString().concat(date < 2 ? " day ago" : " days ago");
          else {
            if (Math.floor(date / 7) < 5)
              return Math.floor(date / 7)
                .toString()
                .concat(Math.floor(date / 7) < 2 ? " week ago" : " weeks ago");
            else {
              if (Math.floor(date / 30) < 12)
                return Math.floor(date / 30)
                  .toString()
                  .concat(
                    Math.floor(date / 30) < 2 ? " month ago" : " months ago"
                  );
              else
                return Math.floor(date / 365)
                  .toString()
                  .concat(
                    Math.floor(date / 365) < 2 ? " year ago" : " years ago"
                  );
            }
          }
        }
      }
    };
  
    return (
      <div className="border p-3 rounded hover:border-gray-500 mb-5 cursor-pointer bg-opacity-[1]" onClick={()=>navigation(`/detail-posts?id=${data.id}`)}>
        {/* title */}
        <div className="flex items-center">
          <div className="flex flex-col">
            <i className="las la-arrow-up"></i>
            <span>{data?.score}</span>
            <i className="las la-arrow-down"></i>
          </div>
          <div className="ml-2">
            <p className="text-xs">
              Posted by {data?.author} {convertUnixToDate(data?.created)}
            </p>
            <p className="font-bold text-lg text-blue-400">{data?.title}</p>
          </div>
        </div>
        {/* video */}
        <div className="w-full h-auto flex justify-center items-center">
          <video
            ref={(e) =>listPostRef&&listPostRef(e, index)}
            className="media-element tErWI93xEKrI2OkozPs7J"
            controls
            height={data?.media?.height}
            loop
            width={data?.media?.width}
            muted
            autoPlay={index === 0||autoPlay}
            preload="auto"
          >
            <source src={data?.media?.content} />
          </video>
        </div>
        {/* interactive */}
        <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="px-1 py-2 hover:bg-gray-300 rounded mx-2">
            <i className="las la-comment-alt"></i>
            <span className="ml-1">{data?.numComments} comments</span>
          </div>
          <div className="px-1 py-2 hover:bg-gray-300 rounded mx-2">
            <i className="las la-share-square"></i>
            <span className="ml-1">Share</span>
          </div>
          <div className="px-1 py-2 hover:bg-gray-300 rounded mx-2">
            <i className="las la-save"></i>
            <span className="ml-1">Save</span>
          </div>
  
          <div
            className="relative before:w-20 before:h-20 before:content-[''] before:absolute before:-z-[1]"
            onMouseOver={() => set_hover(true)}
            onMouseOut={() => set_hover(false)}
          >
            <div className="px-1 py-1 hover:bg-gray-300 rounded mx-2">
              <i className="las la-comment-dots"></i>
            </div>
            <div
              className={classNames(
                "absolute transition border bg-gray-200 p-2 rounded",
                hover ? "" : "hidden"
              )}
            >
              <div className="px-1 py-2 flex items-center hover:bg-gray-300 rounded mx-2">
                <i className="las la-save"></i>
                <span className="ml-1">Hide</span>
              </div>
              <div className="px-1 py-2 flex items-center hover:bg-gray-300 rounded mx-2">
                <i className="las la-save"></i>
                <span className="ml-1">Report</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500">{data.upvoteRatio*100}% Upvoted</div>
        </div>
      </div>
    );
  };
  export  default PostJSX;