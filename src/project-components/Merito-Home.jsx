import { Link } from "react-router-dom";
export const MeritoHome = ({ tags }) => {
  const TagButton = ({ tag }) => {
    return (
      <span className="inline-block bg-slate-900 border-2 border-gray-400 text-gray-400 text-xs font-medium px-2 py-1 rounded-md mr-2 mb-2 ">
        {tag}
      </span>
    );
  };

  return (
    <>
      <Link to="/under-construction">
        <button
          className="bg-slate-800 text-white font-semibold py-2 px-4 rounded-md mb-4 border-2 border-blue-600 transition duration-500 ease-in-out hover:bg-blue-600 w-full sm:w-auto"
          href="/under-construction"
        >
          🚧 Merito 🚧
        </button>
      </Link>

      <div>
        {tags.map((tag, index) => (
          <TagButton key={index} tag={tag} />
        ))}
      </div>

      <div>
        <p className="text-gray-400 text-sm font-medium">Loading . . .</p>
        <p className="mt-2 text-gray-400 text-sm font-medium">
          Building with{" "}
          <a
            className="text-blue-400 hover:text-green-500"
            href="https://www.dannyhidalgo.dev/"
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

      <hr className="border-t border-slate-500 my-4" />
    </>
  );
};
