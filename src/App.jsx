import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage.jsx";
import { OptimumProject } from "./Projects/OptimumProject.jsx";
// import { MeritoProject } from "./Projects/MeritoProject.jsx";
import { UnderConstructionMerito } from "./other/UnderConstruction-merito.jsx";
import { SiteFooter } from "./other/SiteFooter.jsx";

export const App = () => {


  return (
    <>
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/optimum-project" element={<OptimumProject />} />
          <Route path="/under-construction" element={<UnderConstructionMerito />} />
        </Routes>
      </div>
      <SiteFooter />
    </>
  )
}

