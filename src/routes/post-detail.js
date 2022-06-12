import { useAuth } from "global";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import PostJSX from "component/post";
import {homeService} from "services"


const PostDetail=()=>{
    const {posts,changeFixedBar,set_controlBar}=useAuth()
    const navigation=useNavigate();
    const location=useLocation()
    const [idPost,set_idPost]=useState(null);
    const [data,set_data]=useState(null)

    const getDetailById=async()=>{
        const data= await homeService.getById(idPost,{
            rtj:"only",emotes_as_images:true,redditWebClient:"web2x",app:"web2x-client-production",profile_img:true,include:"prefsSubreddit",subredditName:"gifs",hasSortParam:false,include_categories:true,onOtherDiscussions:false,depth:2
        })
        // console.log(data)
        data&&set_data(data.posts[idPost])
    }

    useEffect(()=>{
        let idPost=new URLSearchParams(location.search).get("id");
        if(idPost)set_idPost(idPost);
        else navigation("/");
    },[location.search])

    useEffect(()=>{
        console.log("idPost",idPost,idPost&&posts)
        idPost&&getDetailById();
        idPost&&set_controlBar(false);
        changeFixedBar(false);
    },[idPost])
    return (<div>
        {
            data&&<PostJSX
            data={data}
            autoPlay={true}
            // index={index}
            // listPostRef={(ref, index) => listPostRef(ref, index)}
          />
        }
    </div>)
}

export default PostDetail;