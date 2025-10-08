import { useState, useEffect } from "react";
import { GrowingMySkills } from "./GrowingMySkills.jsx";
import { SocialLinks } from "./SocialLinks.jsx";
import { OptimumHome } from "../project-components/Optimum-Home.jsx";
import { AboutMe } from "../AboutMe/AboutMe.jsx";
import { NavBarHome } from "../other/NavBarHome.jsx";

export const HomePage = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [projects, setProjects] = useState([
    {
      component: <OptimumHome tags={["Full Stack", "Python", "Personal"]} />,
      tags: ["Full Stack", "Python", "Personal"],
    },
  ]);

  const filters = ["All", "Full Stack", "Python", "Personal"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.includes(selectedFilter)
        );

  const words = [
    "Full Stack Developer",
    "Problem Solver",
    "⇓ Connect with me on LinkedIn",
    "Your Next Hire? ;)",
    "Jr. Software Engineer",
  ];

  useEffect(() => {
    let typingTimer;
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      typingTimer = setTimeout(handleTyping, typingSpeed);
    };

    typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, typingSpeed, loopNum]);

  return (
    <>
      <NavBarHome />
      
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23334155" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          {/* Profile Image with Animated Border */}
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 animate-pulse">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-slate-900"></div>
            </div>
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden p-1 bg-gradient-to-r from-blue-500 to-cyan-500">
              <img
                src="./assets/homeLogos/profileImage.jpeg"
                alt="Joe Albrecht - Full Stack Developer"
                className="w-full h-full object-cover rounded-full bg-slate-800"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Joe Albrecht
            </h1>
            
            <div className="h-12 sm:h-16 flex items-center justify-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">
                {text}
                <span className="border-r-2 border-blue-400 animate-pulse ml-1"></span>
              </h2>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 sm:space-x-8 mb-12">
            <SocialLinks />
          </div>

          {/* About Me Section */}
          <div className="w-full max-w-4xl mb-12">
            <AboutMe />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="bg-gradient-to-b from-gray-900 to-slate-900 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Explore my latest work and creative solutions
            </p>
          </div>

          {/* Projects Container */}
          <div id="projects" className="bg-slate-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-slate-700/50">
            
            {/* Projects Header with Toggle */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 mr-3 rounded-full"></span>
                My Work
              </h3>
              
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-400">
                  {isProjectsOpen ? 'Hide' : 'Show'} Projects
                </span>
                <button
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                  className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300 ${
                    isProjectsOpen 
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/20" 
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-lg transform transition-all duration-300 ${
                      isProjectsOpen ? "translate-x-7" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Projects Content */}
            <div
              className={`transition-all duration-700 overflow-hidden ${
                isProjectsOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {/* Filter Buttons */}
              <div className="mb-8">
                <p className="text-sm font-medium text-gray-400 mb-4">Filter by technology:</p>
                <div className="flex flex-wrap gap-3">
                  {filters.map((filter, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedFilter === filter
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20 scale-105"
                          : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white border border-slate-600"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="space-y-6">
                {filteredProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    {project.component}
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🔍</div>
                  <p className="text-gray-400">No projects found for this filter.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gradient-to-b from-slate-900 to-gray-900 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <GrowingMySkills />
        </div>
      </section>
    </>
  );
};
