import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrowingMySkills } from "./GrowingMySkills.jsx";

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
    "Aspiring Smart Contract Developer",
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
          <a
            href="https://www.linkedin.com/in/joe--albrecht/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-8 sm:h-8 hover:w-10 hover:h-10 transition-all duration-400 ease-in-out"
          >
            <img
              src="./assets/homeLogos/linkedin.svg"
              alt="LinkedIn"
              className="w-full h-full object-fit"
            />
          </a>
          <a
            href="https://github.com/Joealb75"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-8 sm:h-8 hover:w-10 hover:h-10 transition-all duration-400 ease-in-out"
          >
            <img
              src="./assets/homeLogos/github.svg"
              alt="GitHub"
              className="w-full h-full object-cover"
            />
          </a>
          <a
            href="mailto:joealbrecht75@gmail.com"
            className="w-6 h-6 sm:w-8 sm:h-8 hover:w-10 hover:h-10 transition-all duration-400 ease-in-out"
          >
            <img
              src="./assets/homeLogos/email.svg"
              alt="Email"
              className="w-full h-full object-cover"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1xdaoFhg3tOihe702BjS8NC0t8z3QTF86/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-8 sm:h-8 hover:w-10 hover:h-10 transition-all duration-400 ease-in-out"
          >
            <img
              src="./assets/homeLogos/resume.svg"
              alt="My Resume"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Projects Section */}
        <div className="mt-12 w-full max-w-3xl px-4">
          <h1 className="text-2xl sm:text-3xl font-medium mb-4 text-white text-left">
            Projects
          </h1>
          <hr className="border-t border-slate-500 my-4" />

          {/* Optimum Mens Health */}
          <Link to="/optimum-project">
            <button
              className="bg-slate-800 text-white font-semibold py-2 px-4 rounded-md mb-4 hover:bg-blue-600 w-full sm:w-auto"
              href="/optimum-project"
            >
              Optimum Mens Health
            </button>
          </Link>

          <p className="text-gray-400 text-sm font-medium">
            Optimum Mens Health is a Full Stack application that I built during
            a 2-wk sprint.
          </p>

          {/* Tools Used */}
          <div className="flex flex-wrap space-x-2 mt-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/JS.svg"
                alt="JavaScript"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/React.svg"
                alt="React"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/PyDjan.svg"
                alt="Python & Django"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/Tail.svg"
                alt="Tailwind CSS"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/SQL.svg"
                alt="SQLite3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/VS.svg"
                alt="VS Code"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/post.svg"
                alt="Postman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/Figma.svg"
                alt="Figma"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* End Optimum */}
          <hr className="border-t border-slate-500 my-4" />

          {/* Merito */}
          <Link to="/under-construction">
            <button
              className="bg-slate-800 text-white font-semibold py-2 px-4 rounded-md mb-4 hover:bg-blue-600 w-full sm:w-auto"
              href="/under-construction"
            >
              🚧 Merito 🚧 
            </button>
          </Link>

          <div>
            <p className="text-gray-400 text-sm font-medium">Loading . . .</p>
            <p className="mt-2 text-gray-400 text-sm font-medium">
              Building with{" "}
              <a
                className="text-blue-400 hover:text-green-500"
                href="https://www.linkedin.com/in/dannyhidalgo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Danny Hidalgo :)
              </a>
            </p>
          </div>

          <div className="flex flex-wrap space-x-2 mt-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/JS.svg"
                alt="JavaScript"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/React.svg"
                alt="React"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/PyDjan.svg"
                alt="Python & Django"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/AWS.svg"
                alt="Amazon Web Service(AWS)"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/TSQ.svg"
                alt="TanStack Query"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/Tail.svg"
                alt="Tailwind CSS"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/SQL.svg"
                alt="SQL"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/VS.svg"
                alt="VS Code"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/post.svg"
                alt="Postman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <img
                src="./assets/projectImages/tools/Figma.svg"
                alt="Figma"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* End Merito */}
          <hr className="border-t border-slate-500 my-4" />
        </div>
      </div>
      <section className="flex flex-col items-center justify-center  bg-slate-900 px-4 pt-4">
        <GrowingMySkills />
      </section>
    </>
  );
};
