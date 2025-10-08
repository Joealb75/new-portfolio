import { useState } from "react";
import { NavBarProjects } from "../other/NavBarProjects.jsx";

export const OptimumProject = () => {
  const slides = [
    {
      image: "./assets/projectImages/optimum-project/1-Home1.svg",
      caption:
        "This is the websites 'Home Page', on the right is a slide show of images from the business, I coordinated with my friend and business owner for the photoshoot. Underneath that are cards for each of the providers with a button that takes you to their 'About Me' page.",
    },
    {
      image: "./assets/projectImages/optimum-project/2-Home2.svg",
      caption:
        "This is the 2nd part of the 'Home Page', shows the latest article posted and business contact details.",
    },
    {
      image: "./assets/projectImages/optimum-project/3-AboutUs1.svg",
      caption: "This is the 'About' section for the business.",
    },
    {
      image: "./assets/projectImages/optimum-project/4-AboutUs2.svg",
      caption: "This is the 2nd part of the 'About' section.",
    },
    {
      image: "./assets/projectImages/optimum-project/5-AboutMe.svg",
      caption:
        "This is the 'About Me' section that is created for every provider, it is sourced from their profile that the provider can edit at any time.",
    },
    {
      image: "./assets/projectImages/optimum-project/6-PrimaryCare1.svg",
      caption: "This is their 'Primary Care' service page.",
    },
    {
      image: "./assets/projectImages/optimum-project/7-PrimaryCare2.svg",
      caption:
        "This is the 2nd part of the 'Primary Care' page with a slide show of customer reviews.",
    },
    {
      image: "./assets/projectImages/optimum-project/8-ArticlesHome.svg",
      caption:
        "This is the 'Articles Home' page where the user can filter articles by their tags. Newest articles display at the top of the list.",
    },
    {
      image: "./assets/projectImages/optimum-project/9-ViewArticle.svg",
      caption:
        "Here you are viewing an article, the card under the image is also a link that will take the user to the writers 'About Me' page.",
    },
    {
      image: "./assets/projectImages/optimum-project/10-Dash1.svg",
      caption:
        "This is the 'Admin Dashboard', (Non-admin providers can only see the consultations they are assigned to, they also have various other restrictions) the admin can see all consultations and at a quick glance see the status of the other providers consultations.",
    },
    {
      image: "./assets/projectImages/optimum-project/11-Dash2.svg",
      caption:
        "This is the 2nd part of the 'Admin dashboard where they can view the latest / all articles. The admin is also able to create, edit and delete Article Tags as needed.",
    },
    {
      image: "./assets/projectImages/optimum-project/12-UserConsult.svg",
      caption:
        "This is the modal that pops up when the admin clicks on 'View Consultations' for one of the providers.",
    },
    {
      image: "./assets/projectImages/optimum-project/13-EditConsult1.svg",
      caption:
        "This is the edit consultation view, Admins can change all information on it. Non-admins can only edit the Status and Provider Comment.",
    },
    {
      image: "./assets/projectImages/optimum-project/14-EditConsult2.svg",
      caption:
        "By default new consultations are assigned to the Admin. Only the Admin can change who the consultation is assigned to.",
    },
    {
      image: "./assets/projectImages/optimum-project/15-EditProfile.svg",
      caption:
        "This is the Edit Profile component, it is the same for all users. I used the Quill rich text editor (in multiple places) but primarily for the bio section so the user could format the text however they would like.",
    },
    {
      image: "./assets/projectImages/optimum-project/16-CreateArticle.svg",
      caption:
        "This is the create new article component that also uses the Quill rich text editor. One important feature of this component is that when non-admins submit an article it is set to 'Not Approved' and will not be shown on the site until the admin changes the status. When an admin creates an article by default it is set to approved and will display on the site once submitted.",
    },
    {
      image: "./assets/projectImages/optimum-project/17-LoFi-Wireframe.svg",
      caption:
        "I used Figma to create a Lo-Fi wireframe to visualize the layout of the site.",
    },
    {
      image: "./assets/projectImages/optimum-project/18-ERD.svg",
      caption:
        "I used dbdiagram.io to create the ERD for this project to visualize the structure of the database and how the different entities will relate to each other.",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const prevSlide = () => {
    setCurrentSlideIndex(
      (currentSlideIndex - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setCurrentSlideIndex((currentSlideIndex + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <>
      <NavBarProjects />
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pb-12">
        
        {/* Hero Section with Project Title */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Optimum Mens Health
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive full-stack healthcare platform built as a capstone project
            </p>
          </div>

          {/* Image Carousel Section */}
          <div className="bg-slate-800 rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 mb-8">
            <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden shadow-lg">
              <img
                src={slides[currentSlideIndex].image}
                alt={`Slide ${currentSlideIndex + 1}`}
                className="w-full h-full object-contain bg-slate-700"
              />
              
              {/* Navigation Buttons */}
              <button
                className="absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-4 text-white text-2xl sm:text-3xl font-bold bg-black/50 hover:bg-blue-600 px-3 sm:px-4 py-2 sm:py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                &#8249;
              </button>
              <button
                className="absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-4 text-white text-2xl sm:text-3xl font-bold bg-black/50 hover:bg-blue-600 px-3 sm:px-4 py-2 sm:py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                &#8250;
              </button>

              {/* Slide Counter */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentSlideIndex + 1} / {slides.length}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mb-6 flex-wrap">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlideIndex
                      ? "w-8 h-3 bg-blue-500"
                      : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Caption */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center px-4">
              {slides[currentSlideIndex].caption}
            </p>
          </div>

          {/* Project Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Main Description */}
            <div className="lg:col-span-2 bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-500 mr-3 rounded-full"></span>
                Project Overview
              </h2>
              
              <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Built as my final capstone project for{" "}
                  <a
                    className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300 transition-colors"
                    href="https://www.linkedin.com/school/nashville-software-school/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nashville Software School
                  </a>
                  . The business owner (Scott) gave me free reign to design the site
                  however I decided, while keeping in mind the project requirements from NSS.
                </p>

                <div className="bg-slate-700/50 rounded-lg p-4 my-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Project Requirements:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <a
                        className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 transition-colors"
                        href="https://www.figma.com/design/j7ew3HjVZd9wrio2GzVXR4/Optimum-Health?node-id=0-1&t=3ks5OeCV5uSHUVma-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LoFi Wireframe
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <a
                        className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 transition-colors"
                        href="https://dbdiagram.io/d/Optimum-Capstone-66992ed68b4bb5230eb7ebc1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Entity Relationship Diagram (ERD)
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <a
                        className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 transition-colors"
                        href="https://docs.google.com/document/d/1XRnvMWd2mNWK9j3rXRtL2gWp4mPtHAoiKiZl4h9ScWs/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        User Stories & MVP
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Use React (JS), Python with Django, and SQLite3
                    </li>
                  </ul>
                </div>

                <p>
                  I am currently working with Scott and his wife to create a different
                  website that matches their vision.
                </p>

                <p>
                  Thank you for checking out my project! There is a 6-minute video
                  walkthrough along with links to the repos in the sidebar.
                </p>

                <p className="text-sm text-slate-400 italic pt-4 border-t border-slate-700">
                  P.S. Any constructive criticism would be greatly appreciated both
                  for this project and my portfolio site ;)
                </p>
              </div>
            </div>

            {/* Links and Actions Sidebar */}
            <div className="space-y-4">
              
              {/* Demo Video Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
                <h3 className="text-white font-semibold mb-3 text-lg">Watch Demo</h3>
                <p className="text-blue-100 text-sm mb-4">
                  6-minute walkthrough showcasing all features
                </p>
                <a
                  href="https://www.linkedin.com/posts/joe--albrecht_it-feels-like-yesterday-i-was-signing-into-activity-7225520469536370690-YNw2?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg text-center hover:bg-blue-50 transition-colors"
                >
                  View Demo →
                </a>
              </div>

              {/* GitHub Repos Card */}
              <div className="bg-slate-800 rounded-2xl shadow-xl p-6">
                <h3 className="text-white font-semibold mb-4 text-lg">Source Code</h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/Joealb75/Optimum-Client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors"
                  >
                    <span className="block text-xs text-gray-400 mb-1">Frontend</span>
                    React Client →
                  </a>
                  <a
                    href="https://github.com/Joealb75/Optimum-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors"
                  >
                    <span className="block text-xs text-gray-400 mb-1">Backend</span>
                    Django API →
                  </a>
                </div>
              </div>

              {/* Tech Stack Card */}
              <div className="bg-slate-800 rounded-2xl shadow-xl p-6">
                <h3 className="text-white font-semibold mb-4 text-lg">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "JavaScript", "Python", "Django", "SQLite3", "Tailwind", "Figma"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
