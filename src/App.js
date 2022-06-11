import Layout from "layout";
import LayoutControlBar from "layout/layout-control-bar";
import { useEffect } from "react";
import axios from "axios";
import {BodyHome} from "routes"

function App() {

  const getApiTest=async()=>{
    // ?rtj=only&redditWebClient=web2x&app=web2x-client-production&include=prefsSubreddit&after=t3_v3fs4l&dist=6&forceGeopopular=false&layout=classic&sort=new
    const {data}=await axios.get("https://gateway.reddit.com/desktopapi/v1/subreddits/gifs",{params:{rtj:"only",redditWebClient:"web2x",app:"web2x-client-production",include:"prefsSubreddit",after:"t3_v3fs4l",dist:6,forceGeopopular:false,layout:"classic",sort:"new"}});
    console.log("first",data);
  }

  useEffect(()=>{
    getApiTest()
  },[])
  return (
    <div className="App flex">
      <div className="bg-[url('./assets/img/bg_img_body.png')] w-full h-full min-h-screen bg-fixed bg-center">
      <Layout>
        <LayoutControlBar>
            <BodyHome/>
        </LayoutControlBar>
      </Layout>
      </div>
    </div>
  );
}

export default App;
