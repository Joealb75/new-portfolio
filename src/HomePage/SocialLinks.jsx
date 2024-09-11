export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">

      <a
        href="https://www.linkedin.com/in/joe--albrecht/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-6 h-6 sm:w-8 sm:h-8 transition duration-700 ease-in-out text-white hover:text-blue-500"
      >
        <i className="fab fa-linkedin text-2xl"></i>
      </a>

      <a
        href="https://github.com/Joealb75"
        target="_blank"
        rel="noopener noreferrer"
        className="w-6 h-6 sm:w-8 sm:h-8 transition duration-700 ease-in-out text-white hover:text-gray-400"
      >
        <i className="fab fa-github text-2xl"></i>
      </a>

      <a
        href="mailto:joealbrecht75@gmail.com"
        className="w-6 h-6 sm:w-8 sm:h-8 transition duration-700 ease-in-out text-white hover:text-green-500"
      >
        <i className="fas fa-envelope text-2xl"></i>
      </a>

      <a
        href="https://drive.google.com/file/d/1xdaoFhg3tOihe702BjS8NC0t8z3QTF86/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="w-6 h-6 sm:w-8 sm:h-8 transition duration-700 ease-in-out text-white hover:text-green-500"
      >
        <i className="fas fa-file-alt text-2xl"></i>
      </a>
    </div>
  );
};
