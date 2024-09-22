import { NavBarProjects } from "./NavBarProjects.jsx";
export const UnderConstructionMerito = () => {
  return (
    <>
    <NavBarProjects />
      <div className="h-screen bg-gray-900 flex flex-col items-center justify-center">
        <div className="w-80 h-80 ">
          <img
            src="./assets/projectImages/merito-project/Merito-Logo-V1.svg"
            alt="Merito.dev"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl text-blue-400 lg:text-6xl font-bold mb-4">
          Under Construction
        </h1>
        <p className="text-lg lg:text-xl text-slate-200 text-center">
          We're working hard to create something awesome! Stay tuned.
        </p>

        <a
          href="https://www.merito.dev/"
          className="mt-6 bg-slate-700 text-slate-200 font-semibold py-2 px-6 rounded-full hover:bg-blue-400 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Back Home
        </a>
      </div>
    </>
  );
};
