import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage.jsx";
import { OptimumProject } from "./Projects/OptimumProject.jsx";
import { BasicNavbar } from "./other/BasicNav.jsx";
// import { MeritoProject } from "./Projects/MeritoProject.jsx";
import { UnderConstruction } from "./other/underConstruction.jsx";

export const App = () => {


  return (
    <>
    <BasicNavbar />
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/optimum-project" element={<OptimumProject />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          
        </Routes>
      </div>
      {/* <SiteFooter /> */}
    </>
  )
}

