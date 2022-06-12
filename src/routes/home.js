import { useEffect, useRef, useState } from "react";
import { homeService } from "services";
// import classNames from "classnames";
import PostJSX from "component/post";
import { useAuth } from "global";
import { useLocation } from "react-router-dom";

const Home = () => {
  const {changeFixedBar,set_controlBar,posts,set_posts,sortOf,set_sortOf}=useAuth()
  const postIds = useRef(null);
  const postRun_arr = useRef(null);
  const check_time = useRef(null);
  const [loadAdd, set_loadAdd] = useState(false);
  const location=useLocation()
  // const [posts, set_posts] = useState([]);
// rtj=only&redditWebClient=web2x&app=web2x-client-production&include=prefsSubreddit&sort=top&t=day&layout=card
  const getListPost = async (statereset=false) => {
    postRun_arr.current = [];
    const data = await homeService.getList({
      rtj: "only",
      redditWebClient: "web2x",
      app: "web2x-client-production",
      include: "prefsSubreddit",
      after: !statereset
        ? postIds.current[postIds.current.length - 1]
        : "",
      dist: 6,
      forceGeopopular: false,
      layout: "classic",
      sort: sortOf,
      limit: 5,
    });
    postIds.current = postIds.current&&!statereset? postIds.current.concat(data.postIds): data.postIds;
    data.posts &&( !statereset?set_posts((arr) => {return { ...arr, ...data.posts };}):set_posts({...data.posts}));
  };

  useEffect(() => {
    set_loadAdd(true);
    set_controlBar(true);
    document.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    check_time.current = false;
  }, [posts]);

  useEffect(() => {
    sortOf&&getListPost(true)
  }, [sortOf]);

  useEffect(() => {
    let typeSort=new URLSearchParams(location.search).get("type");
    typeSort&&set_sortOf(typeSort);
      document.addEventListener("scroll",handleScroll)
    }, [location.search]);

  useEffect(() => {
    if (loadAdd) {
      getListPost();
      set_loadAdd(false);
    }
  }, [loadAdd]);

  const listPostRef = (ref, index) => {
    postRun_arr.current[index] = ref;
  };

  const handleScroll = () => {
    // auto play post
    let checkPlay = false;
    postRun_arr.current?.forEach((ele) => {
      if (!checkPlay) {
        let position = ele?.getBoundingClientRect();
        if (
          position.top + position.bottom > 0 &&
          (position.top + position.bottom) / 2 < window.innerHeight
        ) {
          ele?.play();
          checkPlay = true;
        } else ele?.pause();
      } else ele?.pause();
    });
    // check to the end of page
    if (!check_time.current) {
      let position_nextlast = postRun_arr.current&&
        postRun_arr.current.length - 2 > 0 &&
        postRun_arr.current[
          postRun_arr.current.length - 2
        ].getBoundingClientRect();
      if (position_nextlast.top < window.innerHeight) {
        set_loadAdd(true);
        check_time.current = true;
      }
    }
    // fixed bar
    if(document.getElementById("getpositionfixedbar")?.getBoundingClientRect().bottom<0) changeFixedBar(true);
    else changeFixedBar(false);
  };

  return (
    <div>
      {postIds.current &&
        postIds.current.map(
          (ele, index) =>
            posts[ele] && (
              <PostJSX
                data={posts[ele]}
                key={index}
                index={index}
                listPostRef={(ref, index) => listPostRef(ref, index)}
              />
            )
        )}
    </div>
  );
};

export default Home;


