import { Link } from 'react-scroll';

export const NavBarHome = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="group">
            <div className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 cursor-pointer">
              JoeAlbrecht<span className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">.</span>
              <span className="text-slate-500 animate-pulse">_</span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-600"
            >
              About Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-600"
            >
              Projects
            </Link>
            <Link
              to="my-skills"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-600"
            >
              My Skills
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

