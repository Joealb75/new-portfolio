import { Link } from "react-router-dom";
export const BasicNavbar = () => {
  return (
    <nav className="w-full bg-slate-900 text-white py-4 px-8 flex justify-between items-center">
      <Link to="/">
        <div className="text-lg font-bold hover:text-blue-400">
          JoeAlbrecht. <span className="text-gray-400">_</span>
        </div>
      </Link>
      <div className="text-center">
        <a
          href="/"
          className="text-lg font-semibold hover:text-blue-400 transition duration-300"
        >
          Projects
        </a>
        <a
          href="/about-me"
          className="text-lg font-semibold hover:text-blue-400 transition duration-300 pl-3"
        >
          About Me
        </a>
      </div>
    </nav>
  );
};
