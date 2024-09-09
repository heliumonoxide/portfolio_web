import profileImage from "../../assets/ProfilePhoto.png"
const Introduction = () => {

  return (
    <>
        <div className="flex flew-row place-content-center mx-20 text-6xl font-bold z-0">
          <h1 className="text-center tracking-normal">I'm <span className="h-[70px] bg-gradient-to-r from-[#FF63EA] to-[#0029CF] inline-block text-transparent bg-clip-text">Bryan</span>,<br />Data Scientist</h1>
        </div>
        <div className="flex flew-row place-content-center">
          <img src={profileImage} alt="" className="h-[500px] z-10 absolute top-[180px]"/>
        </div>
        
    </>
  );
};

export default Introduction;