export const AboutMe = () => {
  return (
    <>
      <div className="w-full max-w-3xl px-4 md:pl-5 pt-4" id="about">
        <h1 className="text-2xl sm:text-3xl font-medium  text-white text-left">
          {" "}
          About Me
        </h1>

        <p className="text-xs text-gray-400 pt-1">
          <i className="fas fa-clock mr-2"></i>2
          minute read
        </p>
        
        <hr className="border-t border-slate-500 my-4" />
        <p className="text-gray-400 text-sm">
          I plan and build full-stack applications using React(JS), Python,
          Django, TailwindCSS, SQL and Figma.
          <br />
          <br />
          But how did I get here?
          <br />
          <br />
          In June 2023 I was 1 year into being a Real Estate agent when the
          Interest Rates started to rise and finding business started to get
          more challenging at least for me, I am not from TN so my connections
          were limited. It was at this point where I decided that I wanted to
          gain another valuable skill set that could provide me with consistent
          income.
          <br />
          <br />
          Then one night in July I was watching Mr.Robot and thought "Hollywood
          makes coding seems so complicated, is it really that hard?" so I went
          on amazon and bought the book{" "}
          <a
            className="text-blue-400 hover:text-green-500"
            href="https://www.amazon.com/Learn-Python-Hard-Way-Introduction/dp/0134692888"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Python 3 the Hard Way
          </a>{" "}
          By Zed Shaw. I worked through his book on and off over the next couple
          months, and through that process and the frustration I found a love
          for programming.
          <br />
          <br />I then decided to enroll in a "Intro to Programming" class at
          Volunteer State Community College where I completed the class with a
          97%. During this time I also heard about{" "}
          <a
            className="text-blue-400 hover:text-green-500"
            href="https://www.linkedin.com/school/nashville-software-school/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nashville Software School
          </a>
          . I talked with my professor and ultimately decided to apply to NSS,
          he graciously wrote a{" "}
          <a
            className="text-blue-400 hover:text-green-500"
            href="https://docs.google.com/document/d/12Gi65q4AZ0q5aIFRJNGw9FU7XnytlbJK/edit?usp=sharing&ouid=114759178944075401075&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Letter of Recommendation
          </a>
          . <br />
          <br />
          After a few weeks and going through the interview process I was
          accepted into Nashville Software School intensive 6 month bootcamp for
          full-stack developers with a start date of 02/12/24. For the next 6
          months, Monday-Friday I spent infront of my computer in zoom calls
          with my classmates working through the curriculum, struggling together
          on group projects and laughing through it.
          <br />
          <br />
          As I progressed through NSS, I realized that coding was more than just
          a skill, it was a passion. Each challenge pushed me to think
          critically, and every group project strengthened my ability to
          collaborate with others in meaningful ways. Completing NSS marked the
          beginning of a new chapter in my life where I’m eager to keep learning
          new technologies, adapting, and building solutions that make a
          difference.
        </p>
      </div>
    </>
  );
};
