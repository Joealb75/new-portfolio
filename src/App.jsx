import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage.jsx";
import { OptimumProject } from "./Projects/OptimumProject.jsx";
import { SiteFooter } from "./other/SiteFooter.jsx";
import { MyExperienceHome } from "./MyExperience/MyExperienceHome.jsx";
import { Analytics } from "@vercel/analytics/react"
export const App = () => {


  return (
    <>
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/optimum-project" element={<OptimumProject />} />
          <Route path="/my-experience" element={<MyExperienceHome />}/>
        </Routes>
      </div>
      <SiteFooter />
      <Analytics />
    </>
  )
}

