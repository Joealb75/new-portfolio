export const GrowingMySkills = () => {
  const skills = [
    { name: "JavaScript", icon: "./assets/projectImages/tools/JS.svg", category: "Language" },
    { name: "React", icon: "./assets/projectImages/tools/React.svg", category: "Frontend" },
    { name: "Python / Django", icon: "./assets/projectImages/tools/PyDjan.svg", category: "Backend" },
    { name: "TailwindCSS", icon: "./assets/projectImages/tools/Tail.svg", category: "Styling" },
    { name: "SQL", icon: "./assets/projectImages/tools/SQL.svg", category: "Database" },
    { name: "HTML5", icon: "./assets/projectImages/tools/HTML.svg", category: "Frontend" },
    { name: "CSS", icon: "./assets/projectImages/tools/CSS.svg", category: "Styling" },
    { name: "VS Code", icon: "./assets/projectImages/tools/VS.svg", category: "Tools" },
    { name: "Postman", icon: "./assets/projectImages/tools/post.svg", category: "Tools" },
    { name: "Figma", icon: "./assets/projectImages/tools/Figma.svg", category: "Design" },
    { name: "AWS", icon: "./assets/projectImages/tools/AWS.svg", category: "Cloud" },
    { name: "Caspio", icon: null, category: "Database", color: "bg-orange-500" },
    { name: "Render.com", icon: null, category: "Deployment", color: "bg-purple-500" }
  ];

  const SkillCard = ({ skill }) => (
    <div className="group flex flex-col items-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105 min-w-[120px]">
      {skill.icon ? (
        <img 
          src={skill.icon} 
          alt={skill.name} 
          className="w-12 h-12 sm:w-16 sm:h-16 mb-3 group-hover:scale-110 transition-transform duration-300" 
        />
      ) : (
        <div className={`w-12 h-12 sm:w-16 sm:h-16 mb-3 rounded-lg ${skill.color} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
          {skill.name.charAt(0)}
        </div>
      )}
      <h3 className="text-white text-xs sm:text-sm font-medium text-center mb-1 group-hover:text-blue-300 transition-colors">
        {skill.name}
      </h3>
      <span className="text-gray-400 text-xs px-2 py-1 bg-slate-700/50 rounded-full">
        {skill.category}
      </span>
    </div>
  );

  return (
    <div className="w-full" id="my-skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          My Skills
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
          The languages, frameworks and tools that represent the core of my current skill set
        </p>
      </div>

      {/* Skills Grid */}
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 sm:p-8 shadow-xl mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Scrolling Animation Section */}
      <div className="mb-8">
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
            Technologies in Motion
          </h3>
          <p className="text-gray-400 text-sm">
            A continuous showcase of my technical toolkit
          </p>
        </div>
        
        <div className="relative overflow-hidden bg-slate-800/20 rounded-xl py-8 border border-slate-700/30">
          <div className="flex animate-loop-scroll space-x-8">
            {/* First set */}
            <div className="flex space-x-8 min-w-max">
              {skills.slice(0, 10).map((skill, index) => (
                skill.icon ? (
                  <img 
                    key={index}
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-16 h-16 sm:w-20 sm:h-20 opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" 
                  />
                ) : (
                  <div 
                    key={index}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg ${skill.color} flex items-center justify-center text-white font-bold text-xl opacity-70 hover:opacity-100 transition-opacity`}
                  >
                    {skill.name.charAt(0)}
                  </div>
                )
              ))}
            </div>
            
            {/* Duplicate set for seamless scroll */}
            <div className="flex space-x-8 min-w-max">
              {skills.slice(0, 10).map((skill, index) => (
                skill.icon ? (
                  <img 
                    key={`dup-${index}`}
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-16 h-16 sm:w-20 sm:h-20 opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" 
                  />
                ) : (
                  <div 
                    key={`dup-${index}`}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg ${skill.color} flex items-center justify-center text-white font-bold text-xl opacity-70 hover:opacity-100 transition-opacity`}
                  >
                    {skill.name.charAt(0)}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
