import profileImage from "../../assets/ProfilePhoto.png";
import introComponent from "../../assets/IntroComponent.svg";
import { useState, useEffect } from "react";

const Introduction = () => {
  const words = [
    "Website Developing",
    "Artificial Intelligence",
    "Robotic Process Automation",
    "PCB Design",
    "sasa",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <section id="intro">
        <div className="absolute -top-[350px] -left-[300px]">
          <img src={introComponent} alt="" className="-z-10" />
        </div>
        <div className="flex flex-row place-content-center gap-5 sm:mx-5 md:mx-8 xl:mx-20 px-10 my-10 flex-wrap-reverse">
          <div className="flex flex-col p-2 mt-0 md:mt-2 text-center xl:text-left z-20 w-[650px]">
            <div className="flex flex-col m-2 xl:ml-20 pt-0 md:pt-5 text-4xl md:text-7xl font-bold ">
              <p>
                <span className="text-white drop-shadow-[0_2px_2px_rgba(249,58,237,1)]">
                  Hi There!
                </span>
              </p>
              <p>
                <span className="bg-gradient-to-r from-[#FF63EA] to-[#0029CF] inline-block text-transparent bg-clip-text">
                  Welcome to my Portfolio Web
                </span>
              </p>
            </div>
            <div className="flex flex-row mx-4 xl:ml-20 font-thin sm:text-sm md:text-2xl mt-2 md:mt-8 text-justify text-violet-950">
              <p>
                I am Bryan, an electrical (control) engineering fresh graduate
                and a professional worker specializing in{" "}
                <span className="inline-block h-[24px] md:h-[32px] overflow-hidden">
                  <span
                    className="font-bold bg-gradient-to-r from-[#FF63EA] to-[#0029CF] inline-block text-transparent bg-clip-text inline-block transition-transform duration-1000 transform ease-in-out"
                    style={{
                      transform: `translateY(${
                        -index * ((1 / words.length) * 100)
                      }%)`,
                    }}
                  >
                    {words.map((word, i) => (
                      <span key={i} className="block h-[24px] md:h-[32px]">
                        {word}
                      </span>
                    ))}
                  </span>
                </span>
              </p>
            </div>
            <div className="mt-8 mb-2 flex flew-row place-content-center p-2 gap-5">
              <a href="">
                <div className="transition ease-in-out duration-300 bg-violet-600 hover:bg-transparent hover:border-violet-600 hover:text-black backdrop-blur-md border border-white/20 rounded-lg p-8 text-violet-100 font-thin sm:text-lg md:text-xl px-5 py-3">
                  Hire me!
                </div>
              </a>
              <a href="">
                <div className="transition ease-in-out duration-300 bg-violet-600 hover:bg-transparent hover:border-violet-600 hover:text-black backdrop-blur-md border border-white/20 rounded-lg p-8 text-violet-100 font-thin sm:text-lg md:text-xl px-5 py-3">
                  My Portfolio
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[600px]">
            <div className="flex flew-row place-content-center">
              <img
                src={profileImage}
                alt=""
                className="sm:h-[150px] md:h-[500px] md:h-[508px] z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
