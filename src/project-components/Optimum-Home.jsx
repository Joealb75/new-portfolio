import { Link } from "react-router-dom";

export const OptimumHome = ({ tags }) => {
  const TagButton = ({ tag }) => {
    return (
      <span className="inline-block bg-slate-900 border-2 border-gray-400 text-gray-400 text-xs font-medium px-2 py-1 rounded-md mr-2 mb-2 ">
        {tag}
      </span>
    );
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
      {/* Left side - Project info */}
      <div className="flex-1">
        <Link to="/optimum-project">
          <button
            className="bg-slate-800 text-white font-semibold py-2 px-4 rounded-lg mb-3 border-2 border-blue-600 transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
            href="/optimum-project"
          >
            Optimum Mens Health
          </button>
        </Link>

        <div className="mb-3">
          {tags.map((tag, index) => (
            <TagButton key={index} tag={tag} />
          ))}
        </div>

        <p className="text-gray-400 text-sm">
          A Full Stack healthcare platform built during a 2-week sprint with React, Python, Django, and SQL.
        </p>
      </div>

      {/* Right side - Tech stack icons */}
      <div className="flex flex-wrap gap-2 justify-center sm:justify-end max-w-xs">
        <div className="w-10 h-10">
          <img
            src="./assets/projectImages/tools/JS.svg"
            alt="JavaScript"
            className="w-full h-full object-contain"
            title="JavaScript"
          />
        </div>
        <div className="w-10 h-10">
          <img
            src="./assets/projectImages/tools/React.svg"
            alt="React"
            className="w-full h-full object-contain"
            title="React"
          />
        </div>
        <div className="w-10 h-10">
          <img
            src="./assets/projectImages/tools/PyDjan.svg"
            alt="Python & Django"
            className="w-full h-full object-contain"
            title="Python & Django"
          />
        </div>
        <div className="w-10 h-10">
          <img
            src="./assets/projectImages/tools/Tail.svg"
            alt="Tailwind CSS"
            className="w-full h-full object-contain"
            title="Tailwind CSS"
          />
        </div>
        <div className="w-10 h-10">
          <img
            src="./assets/projectImages/tools/SQL.svg"
            alt="SQLite3"
            className="w-full h-full object-contain"
            title="SQL"
          />
        </div>
        <div className="w-10 h-10">
          <img
            src="./assets/projectImages/tools/Figma.svg"
            alt="Figma"
            className="w-full h-full object-contain"
            title="Figma"
          />
        </div>
      </div>
    </div>
  );
};
