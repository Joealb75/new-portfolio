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

  return (
    <>
    <NavBarProjects/>
      <div className="flex flex-col items-center min-h-screen bg-slate-900">

        <div className="relative w-full sm:w-3/4 lg:w-full h-72 lg:h-full">
          <img
            src={slides[currentSlideIndex].image}
            alt={`Slide ${currentSlideIndex + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
  
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-xl font-bold bg-gray-800 px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={prevSlide}
          >
            &#8249;
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-xl font-bold bg-gray-800 px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={nextSlide}
          >
            &#8250;
          </button>
        </div>
  
        <p className="text-white text-sm sm:text-md text-center w-2/3 mt-4 pl-4 pr-4">
          {slides[currentSlideIndex].caption}
        </p>
        <hr className="border-t border-slate-500 my-4 w-2/3" />
  
        <div className="w-full sm:w-3/4 lg:w-2/3 flex flex-col items-left justify-left mt-6 pl-6">
          <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4">
            Optimum Mens Health
          </h1>
  
          <p className="text-sm lg:text-md text-white mb-6 text-left">
            Was built as my final capstone project for{" "}
            <a
              className="text-blue-400 hover:text-green-500"
              href="https://www.linkedin.com/school/nashville-software-school/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nashville Software School
            </a>
            . <br />
            <br />
            The business owner (Scott) gave me free reign to design the site
            however I decided because I also had to keep in mind the project
            requirements from NSS.
            <br />
            <br />
            Requirements:
            <br />-{" "}
            <a
              className="text-blue-400 hover:text-green-500"
              href="https://www.figma.com/design/j7ew3HjVZd9wrio2GzVXR4/Optimum-Health?node-id=0-1&t=3ks5OeCV5uSHUVma-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LoFi Wireframe
            </a>{" "}
            <br />-{" "}
            <a
              className="text-blue-400 hover:text-green-500"
              href="https://dbdiagram.io/d/Optimum-Capstone-66992ed68b4bb5230eb7ebc1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entity Relationship Diagram (ERD)
            </a>{" "}
            <br />-{" "}
            <a
              className="text-blue-400 hover:text-green-500"
              href="https://docs.google.com/document/d/1XRnvMWd2mNWK9j3rXRtL2gWp4mPtHAoiKiZl4h9ScWs/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              User Stories & MVP
            </a>{" "}
            <br />- Submit Project Proposal W/ ^
            <br />- Use React(JS), Python W/ Django and SQLite3
            <br />
            <br />
            I am currently working with Scott and his wife to create a different
            website that matches their vision.
            <br />
            <br />
            Thank you for checking out my project! There is a 6min video
            walkthrough along with links to the repos below if you would like to
            check it out!
            <br />
            <br />
            <p className="text-xs lg:text-md text-slate-400">
              P.S. Any constructive criticism would be greatly appreciated both
              for this project and my portfolio site ;)
            </p>
          </p>

          <a
          href="https://www.linkedin.com/posts/joe--albrecht_it-feels-like-yesterday-i-was-signing-into-activity-7225520469536370690-YNw2?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 text-sm text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 w-32 text-center mb-4"
        >
          Demo Video
        </a>
        <div className="mb-3">
          <a
            href="https://github.com/Joealb75/Optimum-Client"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-sm text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 w-36 text-center"
          >
            View Front End Code
          </a>
        </div>
        <div className="mt-3">
          <a
            href="https://github.com/Joealb75/Optimum-API"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 text-sm text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 w-36 text-center"
          >
            View Back End Code
          </a>
        </div>
        <hr className="border-t border-slate-500 my-4 w-full" />
        </div>
      </div>
    </>
  );
  
};
