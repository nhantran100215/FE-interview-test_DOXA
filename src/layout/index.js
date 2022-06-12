// import { Fragment } from "react"
import Header from "./top-side-bar";
import LayoutControlBar from "./layout-control-bar";
import { Link } from "react-router-dom";

const Layout=({children})=>{

    return (
      <div className="w-full flex flex-col justify-center items-center overflow-hidden">
        <Header />
        <div className="w-full lg:w-[1024px] ">
          <LayoutControlBar>{children}</LayoutControlBar>
        </div>
      </div>
    );
}
export default Layout;