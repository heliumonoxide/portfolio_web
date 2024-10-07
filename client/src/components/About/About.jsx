const About = () => {
  const logos = [
    "assets/react.svg",
    "assets/vite.svg",
    "assets/tailwind.svg",
    "assets/Altium_Logo.svg",
    "assets/javascript.svg",
    "assets/angular.svg",
    "assets/matlab.svg",
    "assets/Snowflake_Logo.svg",
    "assets/factoryio.png",
    "assets/dotnet.svg",
    "assets/figma.svg",
    "assets/microsoftsql.svg",
    "assets/nodered.svg",
    "assets/opengl.svg",
    "assets/photoshop.svg",
    "assets/powerapps.svg",
    "assets/powerautomate.svg",
    "assets/powerbi.svg",
    "assets/ai.svg",
    "assets/c.svg",
    "assets/cs.svg",
    "assets/c++.svg",
    "assets/python.svg",
    "assets/uipath.svg",
    "assets/arduino.svg",
  ];
  return (
    <>
      <section id="about">
        <div className="flex flex-col relative w-[100vw] max-w-full">
          <img src="assets/star.png" className="absolute top-[34px] left-10 w-10 md:w-20 md:left-20" alt="" />
          <img src="assets/star.png" className="absolute top-[49px] scale-75 md:invisible left-16 w-10 md:w-20 md:left-20" alt="" />
          <img src="assets/LineEllipse.png" className="absolute top-[6vh] -right-[300px] md:-right-[500px] z-0" alt="" />
          <img src="assets/LineEllipse.png" className="absolute top-[6vh] -right-[300px] md:-right-[500px] scale-75 z-0" alt="" />
          <img src="assets/PinkEllipse.png" className="absolute top-[65vh] md:top-[10vh] -left-64 z-0" alt="" />
          <div className="flex flex-row mx-10 sm:mx-[50px] md:mx-[200px] pt-10 md:pt-20 pb-10 place-content-center gap-10 flex-wrap">
            <div className="flex w-[225px] justify-center">
              <img
                src="assets/pasfoto.jpg"
                alt=""
                className="h-[200px] md:h-[300px] z-10 rounded-full"
              />
            </div>
            <div className="flex flex-col px-5 md:px-1 text-violet-50 w-[800px] gap-5 z-40">
              <h1 className="text-2xl md:text-5xl px-1 md:px-10 font-bold">About Me</h1>
              <p className="text-md md:text-xl px-1 md:px-10 font-thin text-justify">
                I am a Fresh Graduate from Universitas Indonesia, majoring in
                Electrical Engineering focusing on Control Engineering and
                Automation. I have a number of experiences in organizations
                which helps me to be more adaptable to different surroundings
                and more responsible in organizing and leading my teams. During
                my time as student at Universitas Indonesia, I have refined my
                technical knowledge particularly in the fields of automation and
                electrical control system for practical use. I am very
                passionate about robotics, automation, and machine learning.
              </p>
            </div>
          </div>
          <div className="bg-white mx-5 md:mx-60 rounded-[40px] h-[100px] md:h-[210px] md:rounded-[70px] mt-5 mb-10 z-40">
            {/* <div className="flex">
                <div className="w-full h-[1px] bg-white mx-40 mb-5"></div>
            </div> */}
            <div className="flex justify-center">
              <div className="font-bold text-violet-600 py-2 md:pb-0 md:pt-5 sm:text-2xl md:text-3xl mb-0 md:mb-10">
                My Hard Skills
              </div>
            </div>
            <div className="rounded-full relative overflow-hidden w-full pt-1 md:pb-5 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[20vh] md:before:w-[500px] before:bg-[linear-gradient(to_right,rgba(255,255,255,100),rgba(255,255,255,0))] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[20vh] md:after:w-[500px] after:-scale-x-100 after:bg-[linear-gradient(to_right,rgba(255,255,255,100),rgba(255,255,255,0))] after:content-['']">
              {/* Carousel container */}
              <div className="flex items-center justify-center space-x-10 animate-marquee">
                {logos.concat(logos).map((logo, index) => (
                  <div
                    key={index}
                    className="h-[40px] md:h-[80px] flex-shrink-0"
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
      </section>
    </>
  );
};

export default About;
