
import axios from "axios"
const service={
    getList:async(params)=>{
        try{
            const {data}=await axios.get( "https://gateway.reddit.com/desktopapi/v1/subreddits/gifs",{params:params})

            return data;
        }catch(error){
            console.log("error",error)
            return false;
        }
    },
    getById:async(id,params)=>{
        try{
            const {data}=await axios.get( `https://gateway.reddit.com/desktopapi/v1/postcomments/${id}`,{params:params})

            return data;
        }catch(error){
            console.log("error",error)
            return false;
        }
    }
}
export default service;