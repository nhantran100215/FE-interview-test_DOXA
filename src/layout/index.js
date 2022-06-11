// import { Fragment } from "react"
import Header from "./top-side-bar";

const Layout=({children})=>{

    return <div className="w-full flex flex-col justify-center items-center overflow-hidden">
        <Header/>
        <div className="w-full lg:w-[1024px] ">    
        {children}
        </div>
    </div>
}
export default Layout;