import { Link } from "react-router-dom";

export const OptimumHome = () => {
  return (
    <>
      <Link to="/optimum-project">
        <button
          className="bg-slate-800 text-white font-semibold py-2 px-4 rounded-md mb-4 border-2 border-blue-600 transition duration-500 ease-in-out hover:bg-blue-600 w-full sm:w-auto"
          href="/optimum-project"
        >
          Optimum Mens Health
        </button>
      </Link>

      <p className="text-gray-400 text-sm font-medium">
        Optimum Mens Health is a Full Stack application that I built during a
        2-wk sprint.
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

      <hr className="border-t border-slate-500 my-4" />
    </>
  );
};
