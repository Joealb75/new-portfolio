import { useState } from "react";

export const AboutMe = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(true);

  return (
    <div className="w-full max-w-4xl" id="about">
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 sm:p-8 shadow-xl">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <div className="flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 mr-3 rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              About Me
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-400">
              {isAboutOpen ? 'Collapse' : 'Expand'}
            </span>
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300 ${
                isAboutOpen 
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/20" 
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-lg transform transition-all duration-300 ${
                  isAboutOpen ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-700 overflow-hidden ${
            isAboutOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Read Time */}
          <div className="flex items-center text-xs text-gray-400 mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            2 minute read
          </div>

          {/* Tech Stack Summary */}
          <div className="bg-slate-700/30 rounded-lg p-4 mb-6 border border-slate-600/30">
            <p className="text-gray-300 text-sm leading-relaxed">
              I plan and build <span className="text-blue-400 font-medium">full-stack applications</span> using 
              <span className="text-cyan-400 font-medium"> React, Python, Django, TailwindCSS, SQL</span> and 
              <span className="text-purple-400 font-medium"> Figma</span>.
            </p>
          </div>

          {/* Story */}
          <div className="text-gray-300 text-sm leading-relaxed space-y-4">
            <p className="text-white font-medium text-base mb-4">But how did I get here?</p>
            
            <p>
              In June 2023 I was 1 year into being a Real Estate agent when the
              Interest Rates started to rise and finding business started to get
              more challenging—at least for me. I am not from TN so my connections
              were limited. It was at this point where I decided that I wanted to
              gain another valuable skill set that could provide me with
              consistent income.
            </p>

            <p>
              Then one night in July I was watching Mr.Robot and thought
              "Hollywood makes coding seem so complicated, is it really that
              hard?" so I went on amazon and bought the book{" "}
              <a
                className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300 transition-colors font-medium"
                href="https://www.amazon.com/Learn-Python-Hard-Way-Introduction/dp/0134692888"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Python 3 the Hard Way
              </a>{" "}
              by Zed Shaw. I worked through his book on and off over the next
              couple months, and through that process and the frustration I found
              a love for programming.
            </p>

            <p>
              I then decided to enroll in an "Intro to Programming" class at
              Volunteer State Community College where I completed the class with a
              97%. During this time I also heard about{" "}
              <a
                className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300 transition-colors font-medium"
                href="https://www.linkedin.com/school/nashville-software-school/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nashville Software School
              </a>
              . I talked with my professor and ultimately decided to apply to NSS,
              he graciously wrote a{" "}
              <a
                className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300 transition-colors font-medium"
                href="https://docs.google.com/document/d/12Gi65q4AZ0q5aIFRJNGw9FU7XnytlbJK/edit?usp=sharing&ouid=114759178944075401075&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Letter of Recommendation
              </a>.
            </p>

            <p>
              After a few weeks and going through the interview process I was
              accepted into Nashville Software School's intensive 6-month bootcamp
              for full-stack developers with a start date of 02/12/24. For the
              next 6 months, Monday-Friday I spent in front of my computer in zoom
              calls with my classmates working through the curriculum, struggling
              together on group projects and laughing through it.
            </p>

            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
              <p className="text-blue-100 font-medium">
                As I progressed through NSS, I realized that coding was more than
                just a skill—it was a passion. Each challenge pushed me to think
                critically, and every group project strengthened my ability to
                collaborate with others in meaningful ways. Completing NSS marked
                the beginning of a new chapter in my life where I'm eager to keep
                learning new technologies, adapting, and building solutions that
                make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
