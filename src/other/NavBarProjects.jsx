
export const NavBarProjects = () => {
    return (
        <nav className="w-full bg-slate-900 text-white py-4 px-8 flex justify-between items-center">
          <a href="/">
            <div className="text-lg font-bold hover:text-blue-400">
              JoeAlbrecht. <span className="text-gray-400">_</span>
            </div>
          </a>
          <div className="text-center">
            <a
              href="/"
              className="text-md font-medium hover:text-blue-400 transition duration-300 "
            >
              Home
            </a>

          </div>
        </nav>
      );
}