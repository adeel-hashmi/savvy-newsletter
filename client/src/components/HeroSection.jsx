import React, { useRef, useState } from "react";
// import HeroImg from "../../assets/imgs/hero-bg.png";
import HeroImg from "/assets/imgs/hero-img-person.jpg";
import GoButton from "./common/Buttons/GoButton";
// import Header from "../Header/Header";
import HeroCard from "./common/Cards/HeroCard";
import { SlEnvolope, SlMagnifier } from "react-icons/sl";
import { CiMedal, CiHeart, CiStar } from "react-icons/ci";
import {
  FaBell,
  FaEnvelope,
  FaEnvelopeOpen,
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";
import { Spinner } from "@nextui-org/react";

import { Link } from "react-router-dom";
import Header from "./Header";

const HeroSection = () => {
  const form = useRef();
  const [toEmail, setToEmail] = useState(""); // Add state for recipient email
  const [subs, setSubs] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
  const [buttonScale, setButtonScale] = useState(1); // State to control button scale

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Recipient Email:", toEmail);

    emailjs
      .sendForm("service_newsletter", "template_l99q7ty", form.current, {
        publicKey: "OT6iLJZE2ikBfi2FT",
        to_email: toEmail,
      })
      .then(
        () => {
          setSubs(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setLoading(false); // Set loading to false after email is sent
      });
    setToEmail("");
  };

  const heroCardData = [
    {
      icon: <CiMedal size={30} className="text-white" />,
      title: "Proof of Quality",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <CiHeart size={30} className="text-white" />,
      title: "Customer Satisfaction",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      icon: <CiStar size={30} className="text-white" />,
      title: "High Ratings",
      description: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <>
      <div className="dark:bg-[url('/assets/imgs/bg/dark-herobg.jpg')] bg-[url('/assets/imgs/bg/herobg.jpg')] bg-no-repeat bg-cover z-20 h-[100vh] overflow-hidden">
        <Header />
        <section className="relative flex justify-center text-black dark:text-white mx-auto items-center mt-[10vh] w-full">
          <div className="lg:flex w-10/12">
            {/* Left Side (lg screens) */}
            <div className=" lg:w-5/12 lg:py-12 z-10 mt-12">
              <span className="flex items-center justify-center lg:justify-start gap-2 text-white dark:text-primary-dark text-3xl xl:text-2xl">
                <hr className="lg:w-8 h-1 my-4 border-0 rounded md:my-10 bg-primary dark:bg-primary-dark" />
                Coming Soon
              </span>
              <h1 className="text-3xl lg:text-2xl mt-8 font-bold xl:text-5xl mb-4 text-center lg:text-left">
                {/* <span className="text-white dark:text-primary-dark lg:text-3xl xl:text-2xl"> */}
                {/* Get Ahead of the Game! */}
                {/* </span> */}
                <br className="lg:hidden text-primary dark:text-primaryLight-dark" />
                {/* <span> */}
                Get Notified <br /> When we Launch
                {/* </span> */}
                {/* Subscribe to Our Newsletter for Exclusive Updates on Our Platform. */}
              </h1>
              {/* Search Bar */}
              <div className="flex items-center my-10 z-0 lg:-mr-40 xs:w-6/12 ">
                <div className="relative w-full">
                  <span className="hidden lg:flex absolute left-7 top-8 text-slate-400">
                    <SlEnvolope size={25} />
                  </span>
                  <form ref={form} onSubmit={sendEmail}>
                    <input
                      name="user_email"
                      type="email"
                      required
                      placeholder="Your email"
                      disabled={subs}
                      value={toEmail}
                      onChange={(e) => setToEmail(e.target.value)} // Handle input change
                      className={`py-4 pl-5 lg:py-8 lg:pl-20 rounded-full shadow-2xl w-full focus:-outline-offset-2 focus:outline-primary ${
                        subs ? "hidden md:flex" : "flex"
                      } `}
                    />

                    <button
                      type="submit"
                      disabled={subs}
                      className={`hidden lg:flex absolute right-1 mr-1 top-0 bg-primary dark:bg-primary-dark text-white px-14 my-2 py-6 rounded-full transition-all duration-300 ${
                        subs
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-gray-800 hover:text-primary"
                      }`}
                    >
                      {loading ? (
                        <>
                          Subscribing... <Spinner size="sm" />
                        </>
                      ) : subs ? (
                        "Thank you 😊"
                      ) : (
                        "Subscribe"
                      )}
                    </button>

                    <button
                      type="submit"
                      disabled={subs || loading}
                      className={`flex lg:hidden absolute top-0 right-1 bg-primary dark:bg-primary-dark text-white my-1 p-3 rounded-full transition-transform duration-300 transform scale-${buttonScale} ${
                        subs ? "w-full my-0 px-0 flex justify-center" : ""
                      }`}
                      onClick={() => {
                        setButtonScale(1.1); // Scale the button when clicked
                        sendEmail();
                      }}
                      onAnimationEnd={() => {
                        setButtonScale(1); // Reset button scale after animation ends
                      }}
                    >
                      {loading ? (
                        <span className="text-primary">
                          Subscribing...
                          <Spinner size="sm" />
                        </span>
                      ) : subs ? (
                        "Thank you 😊"
                      ) : (
                        <FaBell size={25} />
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Popular : */}
              <div className="flex mt-20 lg:mt-22 justify-center lg:">
                <div className="flex space-x-4 text-xs justify-left lg:text-normal">
                  {/* <p className="my-auto">Popular:</p> */}
                  <a
                    href="https://www.linkedin.com/company/savvylancer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black dark:border-white rounded-full p-2 flex items-center"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black dark:border-white rounded-full p-2 flex items-center"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black dark:border-white rounded-full p-2 flex items-center"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/savvy.lancer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black dark:border-white rounded-full p-2 flex items-center"
                  >
                    <FaInstagramSquare size={24} />
                  </a>
                  <a
                    href="mailto:msy@savvylancer.com"
                    className="border-2 border-black dark:border-white rounded-full p-2 flex items-center"
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
              {/* All Categories Button */}
              {/* <div className="flex justify-left">
              <Link to="/categories">
                <GoButton title="All Categories" height={3} width={6} />
              </Link>
            </div> */}
            </div>
            <div className="lg:w-7/12 lg:h-auto hidden lg:flex lg:items-center relative">
              {/* Background Image */}
              <div className="w-9/12 h-5/6 rounded-tl-[50px] rounded-br-[50px] bg-cover lg:flex lg:justify-end mx-auto bg-center bg-[url('/assets/imgs/hero-img-person.jpg')]"></div>

              {/* Left Side Content */}
              <div className="absolute top-10 right-0 w-4/12 h-5/6 flex flex-col gap-4 z-10">
                {/* Your left side content */}
                {heroCardData.map((card, index) => (
                  <HeroCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
