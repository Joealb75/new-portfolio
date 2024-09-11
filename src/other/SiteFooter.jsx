export const SiteFooter = () => {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-bold mb-4">Connect with me ⤵</h2>

        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/joe--albrecht/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-700 ease-in-out"
          >
            <i className="fab fa-linkedin text-2xl"></i>
            <span className="sr-only">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Joealb75"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-700 ease-in-out"
          >
            <i className="fab fa-github text-2xl"></i>
            <span className="sr-only">GitHub</span>
          </a>

          <a
            href="mailto:joealbrecht75@gmail.com"
            className="hover:text-green-500 transition duration-700 ease-in-out"
          >
            <i className="fas fa-envelope text-2xl"></i>
            <span className="sr-only">Email</span>
          </a>

          <a
            href="https://drive.google.com/file/d/1xdaoFhg3tOihe702BjS8NC0t8z3QTF86/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition duration-700 ease-in-out"
          >
            <i className="fas fa-file-alt text-2xl"></i>
            <span className="sr-only">Resume</span>
          </a>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Joe Albrecht. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
