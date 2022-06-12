import React,{  useContext, useState, useRef } from "react";
import axios from "axios";

export const AuthContext = React.createContext({
    formatDate: "YYYY-MM-DD",
    setTitlePage: () => { },
    changeFixedBar:()=>{},
    position_fixedBar:{},
    set_position_fixedBar:()=>{},
    get_position_fixedBar:()=>{},
    fixedBar:false,
    posts:[],
    set_posts:()=>{},
    postIdsRef:null,
    addPostIds:()=>{},
    resetPostIdsRef:()=>{},
    sortOf:"",
    set_sortOf:()=>{},
    controlBar:true,
    set_controlBar:()=>{}
  });

  export const useAuth = () => {
    return useContext(AuthContext);
  };

  const Global = ({ children }) => {
    const [fixedBar,set_fixedBar]=useState(false);
    const [formatDate,set_formatDate]=useState("YYYY-MM-DD")
    const position_fixedBar=useState(null);
    const [posts,set_posts]=useState([])
    const postIdsRef=useRef(null);
    const [sortOf,set_sortOf]=useState("hot");
    const [controlBar,set_controlBar]=useState(true);
    
    // useEffect(()=>{
    //     position_fixedBar.current=
    // },[])

    const set_position_fixedBar=(ref)=>{
        position_fixedBar.current=ref;
    }

    const get_position_fixedBar=()=>position_fixedBar.current;

    const changeFixedBar=(value)=>{
        set_fixedBar(value);
    }

    const addPostIdsRef=(value)=>{
      postIdsRef.current=[...postIdsRef.current,...value];
    }

    const resetPostIdsRef=()=>{
      postIdsRef.current=[];
    }

    return (
      <AuthContext.Provider
        value={{
            fixedBar,
            position_fixedBar:position_fixedBar,
            changeFixedBar,
            formatDate,
            set_formatDate,
            set_position_fixedBar,
            get_position_fixedBar,posts,set_posts,
            postIdsRef,addPostIdsRef,resetPostIdsRef,
            sortOf,set_sortOf,
            controlBar,set_controlBar,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  export default Global;