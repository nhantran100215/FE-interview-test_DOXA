import Layout from "layout";
import {BodyHome,PostDetail} from "routes"
import AuthProvider from "./global"
import { HashRouter, Routes, Route,Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const LayoutRoute=()=>{

  return <Layout>
    <Outlet/>
  </Layout>
}

function App() {
  
  return (
    <AuthProvider>
      <div className="App flex">
        <div className="bg-[url('./assets/img/bg_img_body.png')] w-full h-full min-h-screen bg-fixed bg-center">
          <>
            <>
              <HashRouter>
                <Routes>
                  <Route element={<LayoutRoute/>} >
                    <Route exact path="/" element={<BodyHome />} />
                    <Route exact path="/detail-posts" element={<PostDetail />} />
                  </Route>
                </Routes>
              </HashRouter>
            </>
          </>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;

/*
0: "t3_v3axch"
1: "t3_v39msw"
2: "t3_v38d55"
3: "t3_v37a2k"
4: "t3_v37186"

0: "t3_v3axch"
1: "t3_v39msw"
2: "t3_v38d55"
3: "t3_v37a2k"
4: "t3_v37186"

*/
