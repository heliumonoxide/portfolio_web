import profileImage from "../../assets/ProfilePhoto.png";
import introComponent from "../../assets/IntroComponent.svg";
const Introduction = () => {
  return (
    <>
      <div className="absolute -top-[350px] -left-[300px]">
        <img src={introComponent} alt="" className="-z-10" />
      </div>
      <div className="flex flex-row place-content-center mx-20 px-10">
        <div className="flex flex-col w-full p-10 z-20">
          <div className="flex flex-col ml-20 pt-5 text-7xl font-bold">
            <p><span className="text-white drop-shadow-[0_2px_2px_rgba(249,58,237,1)]">Hi There!</span></p>
            <p><span className="bg-gradient-to-r from-[#FF63EA] to-[#0029CF] inline-block text-transparent bg-clip-text">Welcome to my Portfolio Web</span></p></div>
          <div className="flex flex-row ml-20 font-thin text-2xl mt-8 text-justify">
            <p>I am Bryan, an electrical (control) engineering fresh graduate and a professional worker specializing in <span className="font-bold">Machine Learning</span></p></div>
          <div className="mt-8 mb-2 flex flew-row place-content-center p-2 gap-5">
            <a href="">
              <div className="transition ease-in-out duration-300 bg-violet-700/50 backdrop-blur-md border border-white/20 rounded-lg p-8 text-violet-900 hover:text-white font-thin text-xl px-5 py-3">
                Hire me!
              </div>
            </a>
            <a href="">
              <div className="transition ease-in-out duration-300 bg-violet-700/50 backdrop-blur-md border border-white/20 rounded-lg p-8 text-violet-900 hover:text-white font-thin text-xl px-5 py-3">
                My Portofolio
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flew-row place-content-center">
            <img src={profileImage} alt="" className="h-[500px] z-10" />
          </div>
        </div>
      </div>
      {/* <div className="flex flew-row place-content-center mx-20 text-6xl font-bold z-0">
          <h1 className="text-center tracking-normal">I'm <span className="h-[70px] bg-gradient-to-r from-[#FF63EA] to-[#0029CF] inline-block text-transparent bg-clip-text">Bryan</span>,<br />Data Scientist</h1>
        </div>
        <div className="flex flew-row place-content-center">
          <img src={profileImage} alt="" className="h-[500px] z-10 absolute -mt-[70px]"/>
        </div>
        <div className="mt-[430px] mb-5 flex flew-row place-content-center p-1 gap-5">
          <a href="">
            <div className="transition ease-in-out duration-300 bg-white/30 backdrop-blur-md border border-white/20 rounded-lg p-8 text-violet-900 hover:text-white font-thin text-xl px-5 py-3">
              Hire me!
            </div>
          </a>
          <a href="">
            <div className="transition ease-in-out duration-300 bg-white/30 backdrop-blur-md border border-white/20 rounded-lg p-8 text-violet-900 hover:text-white font-thin text-xl px-5 py-3">
              My Portofolio
            </div>
          </a>
        </div> */}
    </>
  );
};

export default Introduction;
