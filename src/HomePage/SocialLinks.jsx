export const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/joe--albrecht/",
      icon: "fab fa-linkedin",
      hoverColor: "hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30",
      description: "Connect with me professionally"
    },
    {
      name: "GitHub",
      href: "https://github.com/Joealb75",
      icon: "fab fa-github",
      hoverColor: "hover:text-gray-300 hover:bg-gray-300/10 hover:border-gray-300/30",
      description: "View my code repositories"
    },
    {
      name: "Email",
      href: "mailto:joealbrecht75@gmail.com",
      icon: "fas fa-envelope",
      hoverColor: "hover:text-green-400 hover:bg-green-400/10 hover:border-green-400/30",
      description: "Send me an email"
    },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1xdaoFhg3tOihe702BjS8NC0t8z3QTF86/view?usp=sharing",
      icon: "fas fa-file-alt",
      hoverColor: "hover:text-purple-400 hover:bg-purple-400/10 hover:border-purple-400/30",
      description: "Download my resume"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.href.startsWith('mailto:') ? undefined : "_blank"}
          rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
          className={`group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-gray-300 transition-all duration-300 ${link.hoverColor} hover:scale-110 hover:shadow-lg`}
          title={link.description}
        >
          <i className={`${link.icon} text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110`}></i>
          
          {/* Tooltip */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            {link.name}
          </div>
        </a>
      ))}
    </div>
  );
};
