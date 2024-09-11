import { useState, useEffect } from "react";
import { GrowingMySkills } from "./GrowingMySkills.jsx";
import { SocialLinks } from "./SocialLinks.jsx";
import { OptimumHome } from "../project-components/Optimum-Home.jsx";
import { MeritoHome } from "../project-components/Merito-Home.jsx";
import { AboutMe } from "../AboutMe/AboutMe.jsx";
import { NavBarHome } from "../other/NavBarHome.jsx";

export const HomePage = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);


  const [selectedFilter, setSelectedFilter] = useState("All");
  const [projects, setProjects] = useState([
    {
      component: <OptimumHome/>,
      tags: ["Full Stack", "Python", "Personal"],
    },
    {
      component: <MeritoHome/>,
      tags: ["Full Stack", "Group Projects", "Python"],
    },
  ]);

  const filters = ["All", "Full Stack", "Python", "Personal", "Group Projects"];

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
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 px-4">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-4">
          <img
            src="./assets/homeLogos/profileImage.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
          Joe Albrecht
        </h1>

        <h2 className="text-xl sm:text-2xl text-white h-10">
          {text}
          <span className="border-r-2 border-gray-700 animate-pulse"></span>
        </h2>

        <div className="flex space-x-4 sm:space-x-6 mt-3">
          <SocialLinks />
        </div>

        <AboutMe />

        <div id="projects" className="mt-6 w-full max-w-3xl px-4">
          <h1 className="text-2xl sm:text-3xl font-medium text-white text-left">
            Projects
          </h1>

        <div className="flex space-x-4 justify-left mt-2 text-xs ">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setSelectedFilter(filter)}
              className={`py-1 px-3 rounded-md hover:bg-blue-400 transition duration-500 ease-in-out ${
                selectedFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

          <hr className="border-t border-slate-500 my-4" />

          <div>
            {filteredProjects.map((project, index) => (
              <div key={index}>{project.component}</div>
            ))}
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center bg-slate-900 px-4 pt-4">
        <GrowingMySkills />
      </section>
    </>
  );
};
