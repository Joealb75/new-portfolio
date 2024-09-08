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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAAhISHQ0NDKyspGRkb39/f09PRNTU2lpaUxMTHs7Ozx8fHExMT8/PzS0tLb29s4ODiXl5e3t7d1dXWhoaFubm6NjY0aGhpSUlJXV1dAQEAICAjFxcXl5eUjIyOEhIRkZGSxsbEsLCx9fX2amppxcXETExNN+ll7AAAFLElEQVR4nO2d23qqMBBGiVqt4oF6xGoVsdb3f8ONWnetYjI2Mybh+9dVL4rM+oAchyFSP6TTvJE0o8DpJr324sIq+v/XvN53HRwfq0l6bbiouw6Kmebst+HYdUACNC4NR66jESHu/DespmCheDacuY5EjMbJ8N11HILMjoaJ6zAEaaaFYeY4CFkmhWGVL+GhsYneXMcgzEs0dB2CMO2oqn3hmV5UtfHoNUnUdR2CMFX3AwAAAAAAFaQ+Gb8vOq+b4ajlOhQJeuOL3Q712q7amL3+qq4ZBr9LdUH8fuNXUKvO8kBS5nfg03VkTLTvCSo1r8SWo0awaHFcR8fA3Vv0RPgbj129oFIT1xHaUtqK/iJ2HaIddaOg2riO0Y7bjv6WgesgbegRBMPeYR2b/VTYTyJJMOREB0I7c2DqOs6/M6EZpuGO3WiPoVLhzqPM3f2JcKf8C7PckXCTHTpEw4brQP8MZURzINwOcUM0DLelGVbecEQTDHii36IZhpy9+UYyXLkO0wLtKtSZoDPjjKs0B3auo7RiRzB0HaMdzZpRMODZ4RFjh7FwHaE1n3rBdQV22eZaw3CnFT/0dePvnuvoeLg71V9X4QoeubNes6jAM3hmtSkRDL2buGJwtWbzFvZIppR4ND2/l/k6C3mwraPfbCWNuBnuhBcAAAAAAAAAQCg046SXT4azLJsNd5P2II7FEz0GdT2lq1Et7SH3EhuS3myzvVkO2s7HeSKpqVksPfJRdpAhXazskMFQl/mxn+diC3umrZnSC/KoYWLYOziyzWWu5BMMR9Tcq2UmkdcibtimbaV/k/FnCQob1teP+BXsSx98bw1X0wf9DnwxP46Shvkf/AoWvE+joCGlAS1lz7rkLmbYfaiFuYJTUcpwtbcQVCnjjSpk2FraCCrV4ds8kTFspvr/MMP30pyIYZ+afayBrV8UMaQmrurYc3WLEoYrBsFiAOexoWUrc4apPZUwZILpVXKPDRXPpNhnQ558EJ8Nl5U35HlB12tDlrbGa8Mtx5qG14Ys6a1+G3JUdPDbkKPcwdMMO9Ns195l1LXTExzD72cYppvexQO1alPfe1QsY1N5w5fb0mGNF+rBDGm80oa18mR44ovyiqFYt7Dh3VX6Ae14hmoHsobt+yc2FDf6Zu25ofZ1jQbpJ/w2zPWnnpl/QSn7cZugobGVoKzI2U8v5AxfjOem3Kf27yXJGRJGzYRu0XCnuzTMCCf/MP+MpjV2bUgab5kvon2XL2VI66rNL5PbT/OlDGltoHlkYz9/kjIknv42R+oKc4vsyJBaacK4h2P/prWQIbVoj7Emnn1FByFD6mDLWNWh46nhlnz+UA2/yOc3VeOqeWpIL2mTBWpI/8qUqTH11ZCe8WOqrhK+oWnc5qshfZnTlN3nqeGSbmgqH+OpYY2+A2+a53tq+EBWWqCGD0wIYAhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjyGpqKVLo2TK0N39KajnLDgdIelM4fMdT/VNDfWwYAAAAAAAAA8ETEP9zmmDiq6nfgz3xE1GI/oZJHDEVcveYrylyHIEtrGdlXIfKaXEWsH4fyjta6MKQXNAqQT1UY1vi+DeUdhwXziKVgtKccqy4e6qFxfGDAR05bHgfDdTXv0+8KU8eadusKDk7jc3H+U9W+NfvHPR3T/SmCdq5LOK1St5hcFur7qbzYGfYGYt9Nfhb95GM0/f152n8MzVY42Fis0gAAAABJRU5ErkJggg=="
              alt="LinkedIn"
              className="w-full h-full object-fit rounded-full"
            />
          </a>
          <a
            href="https://github.com/Joealb75"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-8 sm:h-8 hover:w-10 hover:h-10 transition-all duration-400 ease-in-out"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/64/github_social_media_logo-64.png"
              alt="GitHub"
              className="w-full h-full object-cover"
            />
          </a>
          <a
            href="mailto:joealbrecht75@gmail.com"
            className="w-6 h-6 sm:w-8 sm:h-8 hover:w-10 hover:h-10 transition-all duration-400 ease-in-out"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/black-white-social-media/32/email_mail_envelope_send_message-64.png"
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
              src="https://t3.ftcdn.net/jpg/03/77/85/04/360_F_377850455_Gk0rRBzegH6YX9SZK9YbgyYyLwrVb9zi.jpg"
              alt="My Resume"
              className="w-full h-full object-cover rounded-full"
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
          <div className="flex flex-wrap space-x-2 mt-4 justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/JS.svg"
                alt="JavaScript"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/React.svg"
                alt="React"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/PyDjan.svg"
                alt="Python & Django"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/Tail.svg"
                alt="Tailwind CSS"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/SQL.svg"
                alt="SQLite3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/VS.svg"
                alt="VS Code"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/post.svg"
                alt="Postman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
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

          <div className="flex flex-wrap space-x-2 mt-4 justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/JS.svg"
                alt="JavaScript"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/React.svg"
                alt="React"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/PyDjan.svg"
                alt="Python & Django"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/AWS.svg"
                alt="Amazon Web Service(AWS)"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/TSQ.svg"
                alt="TanStack Query"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/Tail.svg"
                alt="Tailwind CSS"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/SQL.svg"
                alt="SQL"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/VS.svg"
                alt="VS Code"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <img
                src="./assets/projectImages/tools/post.svg"
                alt="Postman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28">
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
