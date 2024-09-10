import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrowingMySkills } from "./GrowingMySkills.jsx";
import { SocialLinks } from "./SocialLinks.jsx";
import { OptimumHome } from "../project-components/Optimum-Home.jsx";
import { MeritoHome } from "../project-components/Merito-Home.jsx";

export const HomePage = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Full Stack Developer",
    "Jr. Software Engineer",
    "Problem Solver",
    "Your Next Hire? ;)",
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

        {/* Social Links */}
        <div className="flex space-x-4 sm:space-x-6 mt-6">
          <SocialLinks />
        </div>
        

        {/* Projects Section */}
        <div className="mt-12 w-full max-w-3xl px-4">
          <h1 className="text-2xl sm:text-3xl font-medium mb-4 text-white text-left">
            Projects
          </h1>
          <hr className="border-t border-slate-500 my-4" />
          <OptimumHome />
          <MeritoHome />
        </div>
      </div>

      <section className="flex flex-col items-center justify-center  bg-slate-900 px-4 pt-4">
        <GrowingMySkills />
      </section>
    </>
  );
};
