import { Link } from 'react-scroll';

export const NavBarHome = () => {
  return (
    <nav className="w-full bg-slate-900 text-white py-4 px-8 flex justify-between items-center">
      <Link to="/" smooth={true} duration={500}>
        <div className="text-lg font-bold hover:text-blue-400 cursor-pointer">
          JoeAlbrecht. <span className="text-gray-400">_</span>
        </div>
      </Link>
      <div className="text-center">
      <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-md font-medium hover:text-blue-400 transition duration-300 pr-3 cursor-pointer"
        >
          About Me
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-md font-medium hover:text-blue-400 transition duration-300 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="my-skills"
          smooth={true}
          duration={500}
          className="text-md font-medium hover:text-blue-400 transition duration-300 pl-3 cursor-pointer"
        >
          My Skills
        </Link>
      </div>
    </nav>
  );
};

