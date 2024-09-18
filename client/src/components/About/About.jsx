import profileImage from "../../assets/pasfoto.jpg";
import logoReact from "../../assets/react.svg";
import logoVite from "../../assets/vite.svg";
import logoTailwind from "../../assets/tailwind.png";

const About = () => {
  const logos = [
    logoReact,
    logoVite,
    logoTailwind,
    logoReact,
    logoVite,
    logoTailwind,
    logoReact,
    logoVite,
    logoTailwind,
  ];
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row mx-10 sm:mx-[50px] md:mx-[200px] pt-20 pb-10 place-content-center gap-10 flex-wrap">
          <div className="flex w-[225px]">
            <img
              src={profileImage}
              alt=""
              className="md:h-[300px] z-10 rounded-full "
            />
          </div>
          <div className="flex flex-col px-5 md:px-1 text-white w-[800px] gap-5">
            <h1 className="text-xl md:text-5xl font-bold">ABOUT ME</h1>
            <p className="text-sm md:text-xl font-thin text-justify">
              I am a Fresh Graduate from Universitas Indonesia, majoring in
              Electrical Engineering focusing on Control Engineering and
              Automation. I have a number of experiences in organizations which
              helps me to be more adaptable to different surroundings and more
              responsible in organizing and leading my teams. During my time as
              student at Universitas Indonesia, I have refined my technical
              knowledge particularly in the fields of automation and electrical
              control system for practical use. I am very passionate about
              robotics, automation, and machine learning.
            </p>
          </div>
        </div>
        <div className="bg-white mx-5 md:mx-60 rounded-[40px] md:rounded-[70px] mb-10">
          {/* <div className="flex">
                <div className="w-full h-[1px] bg-white mx-40 mb-5"></div>
            </div> */}
          <div className="flex justify-center">
            <div className="font-bold text-violet-700 pt-5 sm:text-2xl md:text-3xl mb-0 md:mb-10">
              MY HARD SKILLS
            </div>
          </div>
          <div className="rounded-full relative overflow-hidden w-full pt-3 md:pb-10 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[20vh] md:before:w-[500px] before:bg-[linear-gradient(to_right,rgba(255,255,255,100),rgba(255,255,255,0))] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[20vh] md:after:w-[500px] after:-scale-x-100 after:bg-[linear-gradient(to_right,rgba(255,255,255,100),rgba(255,255,255,0))] after:content-['']">
            {/* Carousel container */}
            <div className="flex items-center justify-center space-x-6 animate-marquee">
              {logos.concat(logos).map((logo, index) => (
                <div
                  key={index}
                  className="h-[60px] md:h-[100px] flex-shrink-0"
                >
                  <img
                    src={logo}
                    alt={`logo-${index}`}
                    className="object-contain h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
